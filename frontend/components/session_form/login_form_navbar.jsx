import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from './login_form_container';

class LoginFormNavbar extends React.Component {
  render() {
    return (
      <div className="login-navbar-container">
        <div className="login-navbar">
          <div className="logo">
            <Link to="/">
              <h1>facenovel</h1>
            </Link>
          </div>
          <LoginFormContainer />
        </div>
      </div>
    );
  }
}

export default LoginFormNavbar;
