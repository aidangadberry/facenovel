import { connect } from 'react-redux';
import { requestPost } from '../../actions/post_actions';
import PostShow from './post_show';

const mapStateToProps = (state, ownProps) => {
  const post = state.entities.posts[ownProps.postId]
  
  if (post) {
    console.log(post);
    return ({
      postId: ownProps.postId,
      post: post,
      author: state.entities.users[post.authorId],
      recipient: state.entities.users[post.recipientId]
    })
  } else {
    return ({postId: ownProps.postId})
  }
};

const mapDispatchToProps = dispatch => ({
  requestPost: id => dispatch(requestPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);