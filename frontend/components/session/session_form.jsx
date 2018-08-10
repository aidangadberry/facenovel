import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.loginInfo;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderErrors(errors) {

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(
      null,
      errors => this.renderErrors(errors)
    );
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="email">Email or Phone</label>
                </td>
                <td>
                  <label htmlFor="password">Password</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    id="email"
                    onChange={this.handleChange('email')}
                    />
                </td>
                <td>
                  <input
                    type="password"
                    id="password"
                    onChange={this.handleChange('password')}
                    />
                </td>
                <td>
                  <label className="login-button">
                    <input
                      type="submit"
                      value="Log In"
                      />
                  </label>
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <label>
                    <a href="#">Forgot account?</a>
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
