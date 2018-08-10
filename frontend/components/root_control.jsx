import React from 'react';
import { connect } from 'react-redux';
import LandingPage from './session/landing_page';
import HomePage from './home_page';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUserId !== null
});

class RootControl extends React.Component {
  render() {
    if (this.props.loggedIn) {
      return <HomePage />
    } else {
      return <LandingPage />
    }
  }
}

export default connect(mapStateToProps, null)(RootControl);
