// src/components/AppTitle.tsx

import React from 'react';

// Styles and assets
import '../styles/index.scss';
import AppLogo from '../assets/clock.png';

/**
 * This component displays the application's title and logo.
 */
const AppTitle: React.FC = () => {
  return (
    <div className="app-title">
      <img src={AppLogo} alt="App Logo" className="app-logo" />
      <h1>Time Tracker</h1>
    </div>
  );
};

export default AppTitle;