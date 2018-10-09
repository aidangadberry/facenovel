import React from 'react';

class UsersSearch extends React.Component {
  render() {
    return (
      <div className="user-search">
        <input placeholder="Search" />
        <ul className="users-list">

        </ul>
      </div>
    )
  }
}

export default UsersSearch;