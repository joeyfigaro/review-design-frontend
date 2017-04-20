import React , {Component} from 'react';
import LoginRegisterForm from './login-registration-form.jsx';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className="sign-in-wrapper">
      <h2 className="title">Sign In</h2>
      <a href="/register-me">Register Me</a>    
      <LoginRegisterForm
        loginForm={true}
        buttonName='Sign In' />
    </div>
    )
  }
}
