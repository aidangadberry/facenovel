import React from 'react'
import { connect } from 'react-redux';
import { fetchUserByUrl } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => ({
  location: ownProps.location,
  userUrl: ownProps.match.params.userUrl
});

const mapDispatchToProps = dispatch => ({
  fetchUserByUrl: url => dispatch(fetchUserByUrl(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

// user: state.users[ownProps.match.params.userUrl]
