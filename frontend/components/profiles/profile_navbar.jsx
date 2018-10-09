import React from 'react';
import { Link } from 'react-router-dom';

class ProfileNavbar extends React.Component {
  render() {
    return (
      <div className="profile-navbar">
        <ul>
          <li><Link to="#" replace>Timeline</Link></li>
          <li><Link to="#" replace>About</Link></li>
          <li><Link to="#" replace>Friends</Link></li>
          <li><Link to="#" replace>Photos</Link></li>
          <li><Link to="#" replace>More</Link></li>
        </ul>
      </div>
    )
  }
}

export default ProfileNavbar;
