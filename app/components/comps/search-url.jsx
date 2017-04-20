import React, {Component} from 'react';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

export default class SearchUrl extends Component {
  constructor(props) {
    super(props)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }
  handleSearchSubmit(e) {
    e.preventDefault();
    let url = this.refs.url.value;

    if(!url) {
      Alert.error('Specify Url first');
    }else {
      Alert.info('Mirroring a website so wait a moment');
      Meteor.call('getWebsite',url,(err,response) => {
        if(err) {
          Alert.error("Mirroring of website failed "+err);
        }else {
          console.log(response);
          Meteor.call('storeUrl',url,(err,res) => {
            if(err)
            Alert.error('error '+err.reason);
            else {
              Meteor.call('addInFile',url,(err,res) => {
                if(err)
                Alert.error('error'+err.reason);

                Alert.success('mirroring of website is completed successfully');
              })
            }
          })
        }
      })
    }
  }
  render() {
    return (
      <div className="search-component-wrapper">
        <Alert position='top-right' effect="slide" timeout={4000} html={true} stack={{limit: 3}} />
        <form className="search-form" onSubmit={this.handleSearchSubmit}>
          <label>
            Search for Url :
            <input type="text" ref="url" className="site-url" placeholder="url" />
          </label>
          <input type="submit" className="run-server-code" name="get website" />
        </form>
      </div>
    )
  }
}
