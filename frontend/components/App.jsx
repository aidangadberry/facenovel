import React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import LandingPage from './session/landing_page';
import MainNavbar from './main_navbar';
import HomePage from './home_page';
import ProfileContainer from './profiles/profile_container';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUserId !== null
});

class App extends React.Component {

  render() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Route path="/" component={MainNavbar} />
          <div className="main-content-wrapper">
            <Switch>
              <Route path="/:userUrl" component={ProfileContainer} />
              <Route exact path="/" component={HomePage} />
            </Switch>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <LandingPage />
        </div>
      )
    }
  }
};

export default withRouter(connect(mapStateToProps, null)(App));
