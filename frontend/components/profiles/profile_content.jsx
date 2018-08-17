import React from 'react';
import { Switch, Route } from 'react-router';
import TimelineContent from './timeline_content';
// import AboutContent from './about_content';
// import FriendsContent from './friends_content';
// import PhotosContent from './photos_content';

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
      <div>
        <div className="content-sidebar">
          <div className="profile-info">
            <div>Info</div>
            <div>
              <i className="fas fa-birthday-cake"></i>
              {this.formatBirthday(this.props.user.birthday)}
            </div>
          </div>
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

// <Route path="/:user/about" component={AboutContent} />
// <Route path="/:user/friends" component={FriendsContent} />
// <Route path="/:user/photos" component={PhotosContent} />

export default ProfileContent;
