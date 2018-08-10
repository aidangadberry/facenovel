import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

class MainNavbar extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-left">
          <i className="logo-icon">fn</i>
          <div className="user-search">
            <input placeholder="Search"></input>
          </div>
        </div>
        <div className="navbar-right">
          {this.props.currentUser.fname}
          <button onClick={() => this.props.logout()}>Log Out</button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);
