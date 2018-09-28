import React from 'react'
import { connect } from 'react-redux';
import { requestUserByUrl } from '../../actions/user_actions';
import Profile from './profile';
import { getUserFromUrl } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  userUrl: ownProps.match.params.userUrl,
  user: getUserFromUrl(state, ownProps.match.params.userUrl)
});

const mapDispatchToProps = dispatch => ({
  requestUserByUrl: url => dispatch(requestUserByUrl(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
