import React from 'react';
import { withRouter } from 'react-router-dom';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userUrl !== this.props.match.params.userUrl) {
      const url = this.props.match.params.userUrl;
      let recipientId;
      
      if (url === undefined) {
        recipientId = authorId;
      } else {
        recipientId = this.props.userUrls[url];
      }
      
      this.setState({recipientId});
    }
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
      if (this.props.hideModal) this.props.hideModal();
    }
  }

  placeholderText() {
    if (this.state.authorId === this.state.recipientId) {
      return `What's on your mind, ${this.props.author.fname}?`;
    } else {
      return `Write something to ${this.props.recipient.fname}...`
    }
  }

  render() {
    const { formType, formButtonText, author } = this.props;
    
    return (
      <div className="post-container">
        <div className="post-form-header">
          {formType}
        </div>
        <div className="post-form-content">
          <span className="post-thumbnail" style={{ backgroundImage: `url(${author.profilePictureUrl})` }} />
          <form onSubmit={this.handleSubmit}>
            <textarea 
              value={this.state.body}
              onChange={this.handleChange('body')}
              placeholder={this.placeholderText()}
              />
            <button>{formButtonText}</button>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(PostForm);