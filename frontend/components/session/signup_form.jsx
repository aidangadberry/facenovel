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

  handleBirthday(field) {
    return e => this.setState({
      birthday: Object.assign(
        {},
        this.state.birthday,
        {[field]: Number(e.target.value)}
      )
    })
  }

  birthdayPicker() {
    let days = [];
    let months = [];
    let years = [];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    for (var day = 1; day <= 31; day++) {
      days.push(<option value={day} key={day}>{day + 1}</option>);
    }
    for (var month = 0; month < 12; month++) {
      months.push(
        <option value={month} key={month}>{monthNames[month]}</option>);
    }
    for (var year = 2018; year >= 1905; year--) {
      years.push(<option value={year} key={year}>{year}</option>);
    }

    return (
      <div>
        <select
          defaultValue={this.state.birthday.month}
          onChange={this.handleBirthday('month')}
          >{months}</select>
        <select
          defaultValue={this.state.birthday.day - 1}
          onChange={this.handleBirthday('day')}
          >{days}</select>
        <select
          defaultValue={this.state.birthday.year}
          onChange={this.handleBirthday('year')}
          >{years}</select>
      </div>
    );
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
              { this.birthdayPicker() }
            </span>
            <a href="#">Why do I need to provide my birthday?</a>
          </div>
          <div>
            <span>
              <input
                type="radio"
                name="sex"
                value="F"
                onClick={this.handleChange('sex')}
                />
              <label>Female</label>
            </span>
            <span>
              <input
                type="radio"
                name="sex"
                value="M"
                onClick={this.handleChange('sex')}
                />
              <label>Male</label>
            </span>
          </div>
          <div>
            By clicking Sign Up, you agree to our Terms, Data Policy <br/>
            and Cookies Policy. You may receive SMS Notifications from <br/>
            us and can opt out any time.
          </div>
          <div>
            <input type="submit" value="Sign Up"/>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignupForm);
