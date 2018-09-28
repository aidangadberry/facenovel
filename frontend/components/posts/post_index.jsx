import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.requestUserPosts(this.props.userId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userUrl !== this.props.match.params.userUrl) {
      this.props.requestUserPosts(this.props.userId);
    }
  }

  render() {
    let posts = [];
    for (let postId in this.props.posts) {
      const post = this.props.posts[postId];
      const author = this.props.users[post.authorId];
      const recipient = this.props.users[post.recipientId];

      if (post.recipientId === this.props.userId) {
        posts.push(
          <PostIndexItem 
            post={post} 
            author={author} 
            recipient={recipient} 
            key={post.id}
            />
        );
      }
    }

    return (
      <div className="post-list">
        <ul>
          {posts}
        </ul>
      </div>
    )
  }
}

export default PostIndex;