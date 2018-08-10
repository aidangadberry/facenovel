import React from 'react';
import LoginFormNavbar from './session/login_form_navbar';
import LandingPage from './landing_page';
import { AuthRoute } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <LoginFormNavbar />
      <LandingPage />
    </div>
  )
};

export default App;
