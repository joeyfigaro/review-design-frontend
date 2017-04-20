import React , {Component} from 'react';
import LoginRegisterForm from './login-registration-form.jsx';

export default class RegisterMe extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="register-wrapper">
        <h2 className="title">Register Me</h2>
        <span>Already a user, try <a href="/login">login !</a></span>
        <LoginRegisterForm
          loginForm = {false}
          buttonName = 'register me'
          />
      </div>
    )
  }
}
