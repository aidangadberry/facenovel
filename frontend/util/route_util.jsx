import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUserId)};
};

const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => {
      if (!loggedIn) {
        return <Component {...props} />
      } else {
        if (path === "/") {
          return null
        } else {
          return <Redirect to="/" />
        }
      }
    }}/>
);

const Protected = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => {
      if (loggedIn) {
        return <Component {...props} />
      } else {
        if (path === "/") {
          return null
        } else {
          return <Redirect to="/" />
        }
      }
    }}/>
);


export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
