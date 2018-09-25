import React from 'react';
import MainNavbar from './main_navbar';
import CreatePostFormContainer from './posts/create_post_form_container';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <CreatePostFormContainer />
      </div>
    );
  }
}

export default HomePage;
