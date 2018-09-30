import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId
})

class PostEditButton extends React.Component {
  openDropdown() {
    document.getElementById("edit").classList.add("edit-dropdown-visible");
    document.getElementById("edit-dropdown-background").classList.add("edit-dropdown-visible");
  }

  closeDropdown() {
    document.getElementById("edit").classList.remove("edit-dropdown-visible");
    document.getElementById("edit-dropdown-background").classList.remove("edit-dropdown-visible");
  }
  
  render() {
    const { post, currentUserId } = this.props;

    if (post.authorId === currentUserId) {
      return (
        <div className="edit-dropdown">
          <div className="edit-button" onClick={() => this.openDropdown()}>
            <i className="fas fa-ellipsis-h" />
          </div>
          <div id="edit-dropdown-background" className="dd-background" onClick={() => this.closeDropdown()}>
          </div>
          <div id="edit" className="dropdown-box">
            <button>Edit</button><br/>
            <button>Delete</button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

/* <div>
  <a>
    <div className="navbar-settings" onClick={() => this.openDropdown()} />
  </a>
</div>
  <div id="dropdown-background" className="dd-background" onClick={() => this.closeDropdown()}>
  </div>
  <div id="settings" className="dropdown-box">
    <button onClick={() => this.props.logout()}>Log Out</button>
  </div> */

export default connect(mapStateToProps, null)(PostEditButton);