import React from 'react';
import { connect } from 'react-redux';
import CreatePostFormContainer from './posts/create_post_form_container';
import NewsFeedPostsContainer from './posts/news_feed_posts_container';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="news-feed">
          <CreatePostFormContainer />
          <NewsFeedPostsContainer />
        </div>
      </div>
    );
  }
}

export default HomePage;
