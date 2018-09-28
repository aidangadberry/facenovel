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

    // make sure the post body isn't just whitespace
    if ((/\S+/).test(this.state.body)) {
      this.props.action(this.state);
      this.setState({body: ""});
    }
  }

  render() {
    return (
      <div className="post-container">
        <div className="post-form-header">
          Make Post
        </div>
        <div className="profile-picture thumbnail" />
        <div className="post-form-content">
          <form onSubmit={this.handleSubmit}>
            <textarea 
              value={this.state.body}
              onChange={this.handleChange('body')}
              placeholder="What's on your mind?"
              />
            <button>{this.props.formType}</button>
          </form>
        </div>
      </div>
    )
  }
}

export default PostForm;