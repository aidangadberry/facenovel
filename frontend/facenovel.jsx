import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1 store={store}>asuh</h1>, root);
});
