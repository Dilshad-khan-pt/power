import React, { useState } from 'react';
import './WithdrawalPage.css';

const WithdrawalPage = () => {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('upi');
  const [upiId, setUpiId] = useState('');
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '',
    bankName: '',
    ifscCode: '',
    yourName: '',
  });

  // Update form field
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'method') {
      setMethod(value);
    } else if (name in bankDetails) {
      setBankDetails({ ...bankDetails, [name]: value });
    } else {
      switch (name) {
        case 'amount':
          setAmount(value);
          break;
        case 'upiId':
          setUpiId(value);
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle withdrawal logic here
    alert(`Withdraw ${amount} via ${method}`);
  };

  return (
    <div className="withdrawal-container">
      <h2>Withdraw Funds</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="method">Withdrawal Method:</label>
          <select
            id="method"
            name="method"
            value={method}
            onChange={handleChange}
          >
            <option value="upi">UPI</option>
            <option value="bank">Bank Account</option>
          </select>
        </div>

        {method === 'upi' && (
          <div className="form-group">
            <label htmlFor="upiId">UPI ID:</label>
            <input
              type="text"
              id="upiId"
              name="upiId"
              value={upiId}
              onChange={handleChange}
              placeholder="Enter UPI ID"
              required
            />
          </div>
        )}

        {method === 'bank' && (
          <>
            <div className="form-group">
              <label htmlFor="yourName">Your Name:</label>
              <input
                type="text"
                id="yourName"
                name="yourName"
                value={bankDetails.yourName}
                onChange={handleChange}
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bankName">Bank Name:</label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                value={bankDetails.bankName}
                onChange={handleChange}
                placeholder="Enter Bank Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="accountNumber">Bank Account Number:</label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={bankDetails.accountNumber}
                onChange={handleChange}
                placeholder="Enter Bank Account Number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ifscCode">IFSC Code:</label>
              <input
                type="text"
                id="ifscCode"
                name="ifscCode"
                value={bankDetails.ifscCode}
                onChange={handleChange}
                placeholder="Enter IFSC Code"
                required
              />
            </div>
          </>
        )}

        <button type="submit">
          Withdraw
        </button>
      </form>
    </div>
  );
};

export default WithdrawalPage;
