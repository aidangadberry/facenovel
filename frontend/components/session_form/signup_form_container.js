import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = state => {
  let defaultBday = new Date();
  defaultBday = defaultBday.setFullYear(defaultBday.getFullYear() - 25);

  return (
    {
      errors: state.errors.session,
      userInfo: {
        fname: '',
        lname: '',
        email: '',
        password: '',
        birthday: defaultBday,
        sex: ''
      }
    }
  )
};

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
