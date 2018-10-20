import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  const comment = {
    authorId: state.session.currentUserId,
    postId: ownProps.postId,
    body: ''
  };

  return ({
    author: state.entities.users[state.session.currentUserId],
    comment
  });
};

const mapDispatchToProps = dispatch => ({
  action: comment => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);