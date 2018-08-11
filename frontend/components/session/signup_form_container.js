import { connect } from 'react-redux';
import React from 'react';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = state => {
  const today = new Date();
  const defaultBday = {
    year: today.getFullYear() - 25,
    month: today.getMonth(),
    day: today.getDate()
  }

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
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
