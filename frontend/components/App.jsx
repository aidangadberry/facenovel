import React from 'react';
import { Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingPage from './session/landing_page';
import MainNavbar from './navbar/main_navbar';
import HomePage from './home_page';
import ProfileContainer from './profiles/profile_container';
import PostModal from './ui/post_modal';

class App extends React.Component {

  render() {
    return (
      <div>
        <AuthRoute path="/" component={LandingPage} />
        <ProtectedRoute path="/" component={MainNavbar} />
        <div className="main-content-wrapper">
          <Switch>
            <ProtectedRoute path="/:userUrl" component={ProfileContainer} />
            <ProtectedRoute path="/" component={HomePage} />
          </Switch>
          <PostModal />
        </div>
      </div>
    )
  }
};

export default App;
