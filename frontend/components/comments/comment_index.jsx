import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  render() {
    if (!this.props.comments) return null;

    const commentsIndex = this.props.comments.map(comment => {
      return <CommentIndexItem
        key={comment.id}
        comment={comment}
        author={this.props.users[comment.authorId]}
      />
    });
    
    return (
      <div>
        {commentsIndex}
      </div>
    )
  }
}

export default CommentIndex;