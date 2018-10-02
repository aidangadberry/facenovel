import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import PostIndex from './post_index';
import { requestUserPosts } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => ({
  posts: state.entities.posts,
  users: state.entities.users,
  userId: state.entities.userUrls[ownProps.match.params.userUrl],
});

const mapDispatchToProps = dispatch => ({
  requestUserPosts: userId => dispatch(requestUserPosts(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));