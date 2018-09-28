import React from 'react';
import { connect } from 'react-redux';
import CreatePostFormContainer from './posts/create_post_form_container';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="news-feed">
          <CreatePostFormContainer />
        </div>
      </div>
    );
  }
}

export default HomePage;
