import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/session_actions';

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
    return (
      <div className="navbar-container">
        <div className="navbar-main">
          <div className="navbar-left">
            <i className="logo-icon">fn</i>
            <div className="user-search">
              <input placeholder="Search"></input>
            </div>
          </div>
          <div className="navbar-right">
            <div>
              <Link to={`/${this.props.currentUser.userUrl}`}>{this.props.currentUser.fname}</Link>
            </div>
            <div>
              <a href="#">Home</a>
            </div>
            <div>
              <a href="#"><div className="navbar-friends"></div></a>
              <a href="#"><div className="navbar-messages"></div></a>
              <a href="#"><div className="navbar-notifications"></div></a>
            </div>
            <div>
              <a href="#"><div className="navbar-help"></div></a>
              <a href="#">
                <div
                  className="navbar-settings"
                  onClick={() => this.openDropdown()}
                  ></div>
              </a>
            </div>
            <div id="dropdown-background" className="dd-background" onClick={() => this.closeDropdown()}>
              <div id="settings" className="settings-dropdown">
                <button onClick={() => this.props.logout()}>Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);
