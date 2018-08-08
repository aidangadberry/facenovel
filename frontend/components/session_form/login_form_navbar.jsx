import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

class SessionFormNavbar extends React.Component {
  render() {
    return (
      <div className="session-navbar-container">
        <div className="session-navbar">
          <div className="logo">
            <Link to="/">
              <h1>facenovel</h1>
            </Link>
          </div>
          <SessionForm />
        </div>
      </div>
    );
  }
}

export default SessionFormNavbar;
