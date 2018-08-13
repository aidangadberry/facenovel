import React from 'react'
import { connect } from 'react-redux';
import { fetchUserByUrl } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchUserByUrl: url => dispatch(fetchUserByUrl(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
