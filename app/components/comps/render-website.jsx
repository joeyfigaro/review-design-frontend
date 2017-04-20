import React,{PropTypes,Component} from 'react';

import WebsiteCanvas from './website-canvas.jsx';
import {checkUrl,modifyUrl,checkFormat} from '../../functions.js';
import SearchUrl from './search-url.jsx';

export default class RenderWebsite extends Component {
  componentDidMount() {
    console.log(this);

  }
  render() {
    let {mirroredSite,loading} = this.props;
    let renderConditional = () => {
      if(loading) {
        return (<p>Loading............</p>)
      }else {
        if(!mirroredSite){
          return (<p>No Url for current User</p>);
        }
        let format = checkUrl(mirroredSite.url);
        let newUrl = modifyUrl(mirroredSite.url,format);
        //console.log(newUrl,"new url converted one...");
        return (
          <div className="iframe-wrapper">
            
            <iframe id="myWebsiteFrame" src={`resource/${newUrl}`} width="1024" height="720" />
          </div>
        )
      }
    }
    return (
      <div className="website-render-wrapper">
        <SearchUrl />
        {renderConditional()}
      </div>
    )
  }
}
//
RenderWebsite.propTypes = {
  mirroredSite : PropTypes.any,
  loading : PropTypes.boolean
}
