import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import PostIndex from './post_index';
import { requestWallPosts } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  const posts = [];
  const userId = state.entities.userUrls[ownProps.match.params.userUrl];

  for (let postId in state.entities.posts) {
    const post = state.entities.posts[postId];

    if (post.recipientId === userId) {
      posts.push(post);
    }
  }

  return {
    posts,
    userId,
    users: state.entities.users
  }
};

const mapDispatchToProps = dispatch => ({
  requestPosts: userId => dispatch(requestWallPosts(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));