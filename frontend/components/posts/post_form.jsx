import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea 
            value={this.state.body}
            onChange={this.handleChange('body')}
            />
          <button>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default PostForm;