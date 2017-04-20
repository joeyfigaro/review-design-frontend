import React , {Component} from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';

Accounts.config({
    forbidClientAccountCreation : true
});

export default class LoginRegisterForm extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.renderUsername = this.renderUsername.bind(this);
  }
  handleFormSubmit(e) {
    e.preventDefault();
    let {loginForm} = this.props;
    let userDetails;
    try{
      let email = this.refs.email.value;
      let password = this.refs.password.value;
      if(!email) {
        throw new Error('no email is specified');
      }
      else if(!password) {
        throw new Error('no password is specified');
      }
      else if(!loginForm) {
        //This is a registrationForm
        let username = this.refs.username.value;

        if(!username) {
          throw new Error('no username is specified');
        }

        userDetails = {
          username,
          password,
          email
        }
        console.log(userDetails,"userDetails...");
        // Creating a user
        Accounts.createUser(userDetails,(err,res) => {
          if(err) {
            throw new Error("Issue while creating a user "+ err.reason);
          }else {
            console.log('res');
            FlowRouter.go('/');
          }
        })
      }else {
        // This is a loginForm
        Meteor.loginWithPassword(email,password,(err,res)=> {
          if(err) {
            throw new Error("Login failed due to "+err.reason)
          }else {
            console.log(res,"logged in successfull");
            FlowRouter.go('/');
          }
        })
      }
    }catch(err) {
      console.log("current error is given here.",err);
    }
  }
  renderUsername() {
    if(!this.props.loginForm) {
      return (
        <div className="form-group">
          <label>
            Username : <br/>
          <input type="text" ref="username" className="user-name" placeholder="username" required/>
          </label>
        </div>
      )
    }
  }
  render() {
    let {buttonName} = this.props;
    return(
    <div className="login-register-form-wrap">
      <form id="registerMe" className="registeration-form" onSubmit={this.handleFormSubmit}>
        {this.renderUsername()}
        <div className="form-group">
          <label>
            Email : <br/>
          <input type="email" ref="email" className="user-email" placeholder="email" required/>
          </label>
        </div>
        <div className="form-group">
          <label>
            Password : <br/>
          <input type="password" ref="password" className="user-password" placeholder="******" required/>
          </label>
        </div>
        <div className="form-group">
          <input type="submit" className="submit" value={buttonName}/>
        </div>
      </form>
    </div>
    )
  }
}
