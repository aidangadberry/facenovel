import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;

  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    };
    delete window.currentUser;
  }

  const store = configureStore(preloadedState);

  const container = document.getElementById('root');
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Root />
      </Provider>
    </React.StrictMode>
  );
});
