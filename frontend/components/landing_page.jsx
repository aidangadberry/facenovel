import React from 'react';
import SignupFormContainer from './session/signup_form_container';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page-container">
        <div className="recent-logins"></div>
        <SignupFormContainer />
      </div>
    )
  }
}

export default LandingPage;
