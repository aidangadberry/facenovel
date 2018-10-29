import React from 'react';
import { Link } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({body: e.target.innerHTML});
  }

  handleSubmit(e) {
    if ((/\S+/).test(this.state.body)) {
      this.props.action(this.state);
      this.setState({ body: "" });
      e.target.innerHTML = "";
    }
  }

  render() {
    return (
      <div className="comment-form-container">
        <Link
          to={`/${this.props.author.userUrl}`} replace
          className="comment-thumbnail"
          style={{ backgroundImage: `url(${this.props.author.profilePictureUrl})` }}
        />
        <div className="comment-form">
          <form>
            <div className="comment-textarea"
              contentEditable="plaintext-only"
              placeholder="Write a comment..."
              value={this.state.body}
              onInput={this.handleChange}
              onKeyDown={e => {
                if (e.which === 13 && !e.shiftKey) {
                  e.preventDefault();
                  this.handleSubmit(e);
                }
              }}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default CommentForm;