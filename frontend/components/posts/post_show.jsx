import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
  componentDidMount() {
    this.props.requestPost(this.props.postId)
  }

  postRecipient(author, recipient) {
    if (author !== recipient) {
      return <span>
        <i className="fas fa-caret-right"></i><Link to={`/${recipient.userUrl}`}>
            {recipient.fname} {recipient.lname}
          </Link>
        </span>;
    }
  }

  render() {
    if (!this.props.post) return (<div></div>)

    const { author, recipient, post } = this.props;
    
    return (
      <div className="post-container">
        <div className="post-header">
          <div>
            <Link to={`/${author.userUrl}`}>
              {author.fname} {author.lname}
            </Link>
            {this.postRecipient(author, recipient)}
          </div>
          <div className="date">{post.createdAt}</div>
        </div>
        <div className="post-content">
          {post.body}
        </div>
      </div>
    );
  }
}

export default PostShow;