import React from 'react';
import { Link } from 'react-router-dom'

const FriendIndexItem = ({user}) => (
  <Link 
    to={`/${user.userUrl}`} replace
    className="friend-thumbnail"
    style={{ backgroundImage: `url(${user.profilePictureUrl})` }}
  >{`${user.fname} ${user.lname}`}</Link>
);

export default FriendIndexItem;