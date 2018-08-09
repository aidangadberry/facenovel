import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.userInfo;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state).then(
      () => this.props.history.push('/'),
      errors => renderErrors(errors)
    );
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value})
  }

  render() {
    return (
      <div>
        <h1>Create a New Account</h1>
        <h3>It's free and always will be.</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="signup-name">
            <input
              type="text"
              placeholder="First name"
              onChange={this.handleChange('fname')}
              />
            <input
              type="text"
              placeholder="Last name"
              onChange={this.handleChange('lname')}
              />
          </div>
          <div className="signup-email">
            <input
              type="text"
              placeholder="Mobile number or email"
              onChange={this.handleChange('email')}
              />
          </div>
          <div className="signup-password">
            <input
              type="password"
              placeholder="New password"
              onChange={this.handleChange('password')}
              />
          </div>
          <div className="signup-birthday">
            <div>Birthday</div>
            <span className="birthday-wrapper">
              mah bday
            </span>
            <a href="#">Why do I need to provide my birthday?</a>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignupForm);
