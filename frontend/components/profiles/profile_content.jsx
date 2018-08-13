import React from 'react';
import { Switch, Route } from 'react-router';
import TimelineContent from './timeline_content';
// import AboutContent from './about_content';
// import FriendsContent from './friends_content';
// import PhotosContent from './photos_content';

class ProfileContent extends React.Component {
  render() {
    return (
      <div>
        <div className="content-sidebar">
          Friends
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
