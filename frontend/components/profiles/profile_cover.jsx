import React from 'react';
import ProfileNavbar from './profile_navbar';

class ProfileCover extends React.Component {
  handleChange(e, type) {
    const photoData = new FormData();
    photoData.append(`user[${type}]`, e.currentTarget.files[0]);
    this.props.updatePhoto(this.props.currentUserId, photoData);
  }
  
  photoOverlay(type) {
    if (this.props.currentUserId === this.props.user.id) {
      return (
        <div className="photo-overlay" 
          onClick={() => document.getElementById(`photo-upload-${type}`).click()}>
          <i className="fas fa-file-upload" />
          <input type="file" id={`photo-upload-${type}`} onChange={e => this.handleChange(e, type)} />
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <div className="cover-photo" style={this.props.user.coverPhotoUrl ?
          { backgroundImage: `url(${this.props.user.coverPhotoUrl})` } : null}>
          {this.photoOverlay("coverPhoto")}
          <div className="cover-content-left">
            <div className="profile-photo-container">
              <div className="profile-picture" style={this.props.user.profilePictureUrl ?
              { backgroundImage: `url(${this.props.user.profilePictureUrl})` } : null}/>
              {this.photoOverlay("profilePicture")}
            </div>
            <div className="profile-name">
              {this.props.user.fname} {this.props.user.lname}
            </div>
          </div>
          <div className="cover-content-right">
            {/* <button>Update Info</button> */}
          </div>
        </div>
        <div />
        <ProfileNavbar />
      </div>
    );
  }
}

export default ProfileCover;
