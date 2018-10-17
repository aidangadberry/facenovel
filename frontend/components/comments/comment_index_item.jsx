import React from 'react';

const CommentIndexItem = ({ comment, author }) => (
  <div>
    {author.fname + ' ' + author.lname}
    {comment.body}
  </div>
);

export default CommentIndexItem;