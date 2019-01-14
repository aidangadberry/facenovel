import React from 'react';
import { Switch, Route } from 'react-router';
import TimelineContent from './timeline_content';
import FriendThumbnailsContainer from '../friends/friend_thumbnails_container';

class ProfileContent extends React.Component {
  formatBirthday(birthday) {
    if (birthday !== null) {
      let birthdayArr = birthday.split("-");
      birthdayArr.push(birthdayArr.shift());
      return birthdayArr.join("/")
    }
  }

  render() {
    return (
      <div className="profile-content">
        <div className="content-sidebar">
          <div className="profile-intro">
            <div className="intro-header">Intro</div>
            <div className="intro-content">
              <i className="fas fa-birthday-cake"></i>
              {this.formatBirthday(this.props.user.birthday)}
            </div>
          </div>
          <FriendThumbnailsContainer userId={this.props.user.id}/>
        </div>
        <div className="content-main">
          <Switch>
            <Route path="/:userUrl/" component={TimelineContent} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default ProfileContent;
