import React from 'react';
import { connect } from 'react-redux';
import EditPostFormContainer from '../posts/edit_post_form_container';
import { hideModal } from '../../actions/ui_actions';
import { deletePost } from '../../actions/post_actions';

const mapStateToProps = state => ({
  modalType: state.ui.modal.modalType,
  modalProps: state.ui.modal.modalProps
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  deletePost: postId => dispatch(deletePost(postId))
});

class PostModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    }
  }
  
  render() {
    if (this.props.modalType === 'edit') {
      return (
        <div className="post-modal show-modal">
          <div className="post-modal-content">
            <span className="close-button" onClick={() => this.props.hideModal()}>&times;</span>
            <EditPostFormContainer post={this.props.modalProps} />
          </div>
        </div>
      );
    } else if (this.props.modalType === 'delete') {
      return (
        <div className="post-modal show-modal">
          <div className="post-modal-content">
            <span className="close-button" onClick={() => this.props.hideModal()}>&times;</span>
            <div className="post-container">
              <div className="post-form-header">
                Delete Post
              </div>
              <div className="post-form-content">
                Deleting this post will remove it from your timeline. This action cannot be undone.
                <div className="post-footer">
                  <button onClick={() => this.props.hideModal()}>Cancel</button>
                  <button onClick={() => {
                    this.props.deletePost(this.props.modalProps.id);
                    this.props.hideModal()
                  }}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);