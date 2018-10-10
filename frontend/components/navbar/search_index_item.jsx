import React from 'react';
import { Link } from 'react-router-dom';

export default ({ props }) => (
  <li>
    <Link 
      to={`/${props.userUrl}`}
      className="users-list-item"
      replace
      >{props.fname} {props.lname}</Link>
  </li>
);