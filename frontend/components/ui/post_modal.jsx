import React from 'react';
import { connect } from 'react-redux';
import EditPostFormContainer from '../posts/edit_post_form_container';
import { hideModal } from '../../actions/ui_actions';

const mapStateToProps = state => ({
  modalType: state.ui.modal.modalType,
  modalProps: state.ui.modal.modalProps
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal())
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
            <div className="post-header">
              <h1>Delete Post</h1>
            </div>
            <span className="close-button" onClick={() => this.props.hideModal()}>&times;</span>
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);