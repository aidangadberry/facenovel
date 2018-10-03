import { connect } from 'react-redux';
import { requestUserByUrl, updatePhoto } from '../../actions/user_actions';
import Profile from './profile';
import { getUserFromUrl } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  userUrl: ownProps.match.params.userUrl,
  user: getUserFromUrl(state, ownProps.match.params.userUrl),
  currentUserId: state.session.currentUserId
});

const mapDispatchToProps = dispatch => ({
  requestUserByUrl: url => dispatch(requestUserByUrl(url)),
  updatePhoto: (userId, photoData) => dispatch(updatePhoto(userId, photoData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
