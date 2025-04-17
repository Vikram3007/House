import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Assuming you have a CSS file for styles
import App from './App'; // Your main App component

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
