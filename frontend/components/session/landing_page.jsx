import React from 'react';
import SignupFormContainer from './signup_form_container';
import LoginFormNavbar from './login_form_navbar';

class LandingPage extends React.Component {
  render() {
    return <div>
        <LoginFormNavbar />
        <div className="landing-page-container">
          <div className="landing-left">
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
              <div>
                <i class="fas fa-flask" />
                <b>Try it out</b>&nbsp;before registering by selecting&nbsp;<b>Demo</b>!
              </div>
            </div>
            <div className="about">
              <div>This clone was created by Aidan Gadberry</div>
              <div>
                <i class="fab fa-github-square" />
                Check out my <a href="https://github.com/aidangadberry">GitHub</a> for more projects
              </div>
              <div>
                <i class="fab fa-linkedin" />
                Connect with me on <a href="https://www.linkedin.com/in/aidangadberry/">LinkedIn</a>
              </div>
            </div>
          </div>
          <SignupFormContainer />
        </div>
      </div>;
  }
}

export default LandingPage;
