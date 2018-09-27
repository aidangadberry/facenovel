import React from 'react';
import { connect } from 'react-redux';
import CreatePostFormContainer from './posts/create_post_form_container';
import PostShowContainer from './posts/post_show_container';
import { requestUserFriends } from '../actions/user_actions';

const mapStateToProps = state => ({
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  requestUserFriends: userId => dispatch(requestUserFriends(userId))
});

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.requestUserFriends(1);
  }

  render() {
    if (Object.keys(this.props.users).length < 2) {
      return (
        <div className="news-feed">
          <CreatePostFormContainer />
        </div>
      );
    }
    
    return (
      <div>
        <div className="news-feed">
          <CreatePostFormContainer />
          <PostShowContainer postId={8} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
