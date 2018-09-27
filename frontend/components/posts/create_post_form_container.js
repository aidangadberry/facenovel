import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = state => ({
  post: {body: '', authorId: state.session.currentUserId},
  formType: 'Post'
});

const mapDispatchToProps = dispatch => ({
  action: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);