import React from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../actions/ui_actions';

const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId
})

const mapDispatchToProps = dispatch => ({
  showModal: (modalType, modalProps) => dispatch(showModal(modalType, modalProps))
})

class PostEditButton extends React.Component {
  openDropdown(e) {
    document
      .getElementById(`post-dropdown-${this.props.post.id}`)
      .classList.add("edit-dropdown-visible");
    document
      .getElementById(`post-background-${this.props.post.id}`)
      .classList.add("edit-dropdown-visible");
  }

  closeDropdown(e) {
    document
      .getElementById(`post-dropdown-${this.props.post.id}`)
      .classList.remove("edit-dropdown-visible");
    document
      .getElementById(`post-background-${this.props.post.id}`)
      .classList.remove("edit-dropdown-visible");
  }
  
  render() {
    const { post, currentUserId } = this.props;

    if (post.authorId === currentUserId) {
      return (
        <div className="edit-dropdown">
          <div className="edit-button" onClick={e => this.openDropdown(e)}>
            <i className="fas fa-ellipsis-h" />
          </div>
          <div id={`post-background-${post.id}`} className="dd-background" onClick={e => this.closeDropdown(e)}>
          </div>
          <div id={`post-dropdown-${post.id}`} className="dropdown-box">
            <button onClick={() => {
              this.closeDropdown();
              this.props.showModal('edit', post);
            }}>Edit</button><br/>
            <button onClick={() => {
              this.closeDropdown();
              this.props.showModal('delete', post);
            }}>Delete</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostEditButton);