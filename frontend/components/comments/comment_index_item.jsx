import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = ({ comment, author }) => (
  <div className="comment-container">
    <span className="comment-thumbnail" style={{ backgroundImage: `url(${author.profilePictureUrl})` }} />
    <div className="comment-body">
      <Link to={`/${author.userUrl}`} replace>
        {author.fname} {author.lname}
      </Link>
      {' '}
      {comment.body}
    </div>
  </div>
);

export default CommentIndexItem;