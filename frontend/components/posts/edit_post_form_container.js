import { connect } from 'react-redux';
import { updatePost } from '../../actions/post_actions';
import { hideModal } from '../../actions/ui_actions';
import PostForm from './post_form';

const mapStateToProps = (state, ownProps) => ({
  post: ownProps.post,
  formType: 'Edit Post',
  formButtonText: 'Save'
});

const mapDispatchToProps = dispatch => ({
  action: post => dispatch(updatePost(post)),
  hideModal: () => dispatch(hideModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);