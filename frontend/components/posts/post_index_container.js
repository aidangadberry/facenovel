import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import PostIndex from './post_index';
import { requestWallPosts } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => ({
  posts: state.entities.posts,
  users: state.entities.users,
  userId: state.entities.userUrls[ownProps.match.params.userUrl],
});

const mapDispatchToProps = dispatch => ({
  requestWallPosts: userId => dispatch(requestWallPosts(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));