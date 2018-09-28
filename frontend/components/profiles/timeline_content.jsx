import React from 'react';
import CreatePostFormContainer from '../posts/create_post_form_container';
import PostIndexContainer from '../posts/post_index_container';

class TimelineContent extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <CreatePostFormContainer />
        <PostIndexContainer />
      </div>
    )
  }
}

export default TimelineContent;
