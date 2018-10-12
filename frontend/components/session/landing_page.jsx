import React from 'react';
import SignupFormContainer from './signup_form_container';
import LoginFormNavbar from './login_form_navbar';

class LandingPage extends React.Component {
  render() {
    return <div>
        <LoginFormNavbar />
        <div className="landing-page-container">
          <div className="landing-info">
            <div className="landing-header">
              Connect with renowned authors and <br/>see what they're up to on Facenovel
            </div>
            <div>
              <i className="far fa-newspaper" />
              <b>See updates</b>&nbsp;from friends on your News Feed.
            </div>
            <div>
              <i className="fas fa-share-alt" />
              <b>Share what's new</b>&nbsp;in your life on your Timeline.
            </div>
          </div>
          <SignupFormContainer />
        </div>
      </div>;
  }
}

export default LandingPage;
