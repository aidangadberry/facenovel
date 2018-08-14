import React from 'react';

class ProfileNavbar extends React.Component {
  render() {
    return (
      <div className="profile-navbar">
        <ul>
          <li><a href="#">Timeline</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Friends</a></li>
          <li><a href="#">Photos</a></li>
          <li><a href="#">More</a></li>
        </ul>
      </div>
    )
  }
}

export default ProfileNavbar;
