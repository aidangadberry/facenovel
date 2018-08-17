import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';
import { fetchAssociatedRequests } from './actions/friend_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    fetchAssociatedRequests(window.currentUser.id)(store.dispatch);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logout = logout;
  window.fetchAssociatedRequests = fetchAssociatedRequests;

  ReactDOM.render(<Root store={store} />, root);
});
