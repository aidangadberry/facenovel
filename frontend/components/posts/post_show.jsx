import React from 'react';

class PostShow extends React.Component {
  componentDidMount() {
    this.props.requestPost(this.props.postId)
  }

  postRecipient(author, recipient) {
    if (author !== recipient) {
      return (
        <span>
          -> {recipient.fname} {recipient.lname}
        </span>
      );
    }
  }

  render() {
    if (!this.props.post) return (<div></div>)

    const { author, recipient, post } = this.props;
    
    return (
      <div>
        <div>{author.fname} {author.lname} { this.postRecipient(author, recipient) }</div>
        <div>{post.createdAt}</div>
        <div>{post.body}</div>
      </div>
    )
  }
}

export default PostShow;