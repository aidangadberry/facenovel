import React from 'react';
import { connect } from 'react-redux';
import ProfileNavbar from './profile_navbar';

// const mapStateToProps = (state, ownProps) => ({
//   user: state.entities.users
// });
//
// const mapDispatchToProps = dispatch => ({
//
// });

class ProfileCover extends React.Component {
  render() {
    return (
      <div>
        <div className="cover-photo">
          <div className="cover-content-left">
            <div className="profile-photo-container">
              <div className="profile-photo" />
            </div>
            <div className="profile-name">
              User Name
            </div>
          </div>
          <div className="cover-content-right">
            <button>Update Info/Friends?</button>
            <button>Message</button>
          </div>
        </div>
        <div>
        </div>
        <ProfileNavbar />
      </div>
    )
  }
}


// {this.props.user.fname} {this.props.user.lname}
export default ProfileCover;
// export default connect(mapStateToProps, mapDispatchToProps)(ProfileCover);
