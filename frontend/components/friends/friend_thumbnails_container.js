import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import FriendIndex from './friend_index';
import { requestUserFriends } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  
});

const mapDispatchToProps = dispatch => ({
  requestUserFriends: userId => dispatch(requestUserFriends(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendIndex));