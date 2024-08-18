import React, { useState } from 'react';
import './Refer.css';
import referImage from './img/refer.png'; // Adjust the path according to your project structure

const Refer = () => {
  const [referralLink, setReferralLink] = useState('https://yourwebsite.com/referral?code=ABC123');

  const copyToClipboard = () => {
    const inputElement = document.getElementById('referral-link-input');
    if (inputElement && inputElement.value) {
      inputElement.select();
      document.execCommand('copy');
      alert('Referral link copied to clipboard!');
    }
  };

  return (
    <div className="refer-container">
      <header className="refer-header">
        <img src={referImage} alt="Refer and Earn" className="refer-image" />
      </header>

      <div className="bonus-info">
        <h2>Your Bonus Levels</h2>
        <ul>
          <li>Level-1 Bonus: 20%</li>
          <li>Level-2 Bonus: 5%</li>
          <li>Level-3 to 10 Bonus: 1% per level</li>
        </ul>
      </div>

      <div className="referral-link">
        <h3>Your Referral Link</h3>
        <input
          type="text"
          id="referral-link-input"
          value={referralLink}
          readOnly
        />
        <button onClick={copyToClipboard}>Copy Link</button>
      </div>

      <div className="share-button">
        <button>Share Referral</button>
      </div>
    </div>
  );
};

export default Refer;
