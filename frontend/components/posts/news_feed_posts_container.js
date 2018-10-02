import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostIndex from './post_index';
import { requestFeedPosts } from '../../actions/post_actions';

const mapStateToProps = state => {
  const posts = [];
  const userId = state.session.currentUserId;

  for (let postId in state.entities.posts) {
    const post = state.entities.posts[postId];

    // filter posts
    // if (post.recipientId === userId) {}
    posts.push(post);
  }

  return {
    posts,
    userId,
    users: state.entities.users
  }
};

const mapDispatchToProps = dispatch => ({
  requestPosts: userId => dispatch(requestFeedPosts(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));