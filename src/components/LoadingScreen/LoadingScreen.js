import React from 'react';
import './LoadingScreen.css';
import logo from '../../assets/images/logo.png';

function LoadingScreen() {
  return (
    <div className="loading-container">
      <img src={logo} alt="Logo" className="loading-logo" />
      <div className="spinner"></div>
    </div>
  );
}

export default LoadingScreen;
