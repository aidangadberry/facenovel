import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);

    this.photoData;
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

  handleImageUpload(e) {
    console.log(e.target.files[0]);
    this.setState({
      image: URL.createObjectURL(e.target.files[0])
    })

    this.photoData = e.currentTarget.files[0];
  }

  handleSubmit(e) {
    e.preventDefault();

    // make sure the post body isn't just whitespace
    if ((/\S+/).test(this.state.body)) {
      const postData = new FormData();

      for (let key in this.state) {
        postData.append(`post[${key}]`, this.state[key]);
      }
      if (this.photoData) {
        postData.append('post[image]', this.photoData);
      } else {
        postData.delete('post[image]');
      }

      this.props.action(postData);

      this.setState({body: "", image: null});
      this.photoData = null;
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
    
    return <div className="post-container">
        <div className="post-form-header">{formType}</div>
        <div className="post-form-content">
          <Link to={`/${author.userUrl}`} replace className="post-thumbnail" style={{ backgroundImage: `url(${author.profilePictureUrl})` }} />
          <form onSubmit={this.handleSubmit}>
            <textarea value={this.state.body} onChange={this.handleChange("body")} placeholder={this.placeholderText()} />
            { this.photoData ? <img src={this.state.image} /> : null }
            <div className="post-form-footer">
              <label htmlFor="image-upload">
                <i className="fa fa-paperclip" aria-hidden="true" />
              </label>
              <input id="image-upload" type="file" onChange={this.handleImageUpload} />
              <button>{formButtonText}</button>
            </div>
          </form>
        </div>
      </div>;
  }
}

export default withRouter(PostForm);