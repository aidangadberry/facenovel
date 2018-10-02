import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.requestPosts(this.props.userId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userUrl !== this.props.match.params.userUrl) {
      this.props.requestPosts(this.props.userId);
    }
  }

  render() {
    let posts = this.props.posts.map(post => {
      const author = this.props.users[post.authorId];
      const recipient = this.props.users[post.recipientId];

      return (
        <PostIndexItem
          post={post}
          author={author}
          recipient={recipient}
          key={post.id}
        />
      );
    });

    return (
      <div className="post-list">
        <ul>
          {posts.reverse()}
        </ul>
      </div>
    )
  }
}

export default PostIndex;