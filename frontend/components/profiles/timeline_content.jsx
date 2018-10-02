import React from 'react';
import CreatePostFormContainer from '../posts/create_post_form_container';
import WallPostsContainer from '../posts/wall_posts_container';

class TimelineContent extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <CreatePostFormContainer />
        <WallPostsContainer />
      </div>
    )
  }
}

export default TimelineContent;
