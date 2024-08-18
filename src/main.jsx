import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Apne App component ko import karein
import './index.css'; // Global CSS file ko import karein
// import './components/Page1'
// import BtmNav from './components/BtmNav'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <BtmNav /> */}
    {/* <Page1 /> */}
  </React.StrictMode>
);
