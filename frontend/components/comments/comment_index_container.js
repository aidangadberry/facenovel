import { connect } from 'react-redux';
import { requestPostComments } from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => ({
  postId: ownProps.postId,
  comments: state.entities.comments[ownProps.postId],
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);