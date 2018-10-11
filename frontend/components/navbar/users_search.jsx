import React from 'react';
import { searchUsers } from '../../util/user_api_util';
import SearchIndexItem from './search_index_item';

class UsersSearch extends React.Component {
  constructor(props) {
    super(props);
    this.indexItems = [];
    this.focus = false;
    this.searchField;
    this.toggleFocus = this.toggleFocus.bind(this);
  }

  componentDidMount() {
    this.searchField = document.getElementById("user-search")
    this.searchField.addEventListener("focusin", this.toggleFocus);
  }

  toggleFocus() {
    if (!this.focus) {
      this.searchField.removeEventListener("focusin", this.toggleFocus);
      this.searchField.addEventListener("focusout", this.toggleFocus);
      this.focus = true;
      this.forceUpdate();
    } else {
      setTimeout(() => {
        this.searchField.removeEventListener("focusout", this.toggleFocus);
        this.searchField.addEventListener("focusin", this.toggleFocus);
        this.focus = false;
        this.forceUpdate();
      }, 200);
    }
  }
  
  handleInput(e) {
    if (e.target.value === "") {
      this.indexItems = [];
      this.forceUpdate();
    } else {
      searchUsers(e.target.value).then(users => {
        this.indexItems = [];
        
        users.forEach(user => {
          this.indexItems.push(<SearchIndexItem key={user.id} props={user} />);
        });
  
        this.forceUpdate();
      });
    }
  }
  
  render() {
    return (
      <div className="search-container">
        <input type="search" id="user-search" className="user-search" placeholder="Search" onChange={e => this.handleInput(e)} />
        {this.indexItems.length === 0 || !this.focus ? null : <ul className="users-list">
          {this.indexItems}
        </ul>}
      </div>
    )
  }
}

export default UsersSearch;