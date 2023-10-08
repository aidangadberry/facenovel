import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

export default function(preloadedState = {}) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => (
      // add logger middleware in development
      process.env.NODE_ENV !== 'production' 
        ? getDefaultMiddleware().concat(logger)
        : getDefaultMiddleware()
    ),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
  });
}
