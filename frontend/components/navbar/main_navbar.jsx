import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import UsersSearchContainer from './users_search_container';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

class MainNavbar extends React.Component {
  openDropdown() {
    document.getElementById("settings").classList.add("dropdown-visible");
    document.getElementById("dropdown-background").classList.add("dropdown-visible");
  }
  closeDropdown() {
    document.getElementById("settings").classList.remove("dropdown-visible");
    document.getElementById("dropdown-background").classList.remove("dropdown-visible");
  }

  render() {
    const user = this.props.currentUser;
    
    return <div className="navbar-container">
        <div className="navbar-main">
          <div className="navbar-left">
            <Link className="logo-icon" to="/" replace />
            <UsersSearchContainer />
          </div>
          <div className="navbar-right">
            <div>
              <Link className="navbar-link" to={`/${user.userUrl}`} replace>
                <span className="navbar-thumbnail" style={{ backgroundImage: `url(${user.profilePictureUrl})` }} />
                {user.fname}
              </Link>
            </div>
            <div>
              <Link className="navbar-link" to="/" replace>Home</Link>
            </div>
            <div>
              <a>
                <div className="navbar-settings" onClick={() => this.openDropdown()} />
              </a>
            </div>
            <div id="dropdown-background" className="dd-background" onClick={() => this.closeDropdown()}>
            </div>
            <div id="settings" className="dropdown-box">
              <button onClick={() => this.props.logout()}>Log Out</button>
            </div>
          </div>
        </div>
      </div>;
  }
}

/* <div>
  <a>
    <div className="navbar-friends" />
  </a>
  <a>
    <div className="navbar-messages" />
  </a>
  <a>
    <div className="navbar-notifications" />
  </a>
  <a>
    <div className="navbar-help" />
  </a>
</div> */

  // <Link to={`/${this.props.currentUser.userUrl}`}>{this.props.currentUser.fname}</Link>

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNavbar));
