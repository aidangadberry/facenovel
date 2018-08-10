import React from 'react';
import { Route } from 'react-router';
import RootControl from './root_control';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={RootControl} />
    </div>
  )
};

export default App;
