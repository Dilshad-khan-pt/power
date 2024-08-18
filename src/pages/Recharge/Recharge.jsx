import React, { useState } from 'react'
import './Recharge.css'

const Recharge = () => {
  const [amount, setAmount] = useState('') // State to hold the input value
  const [selectedMethod, setSelectedMethod] = useState('') // State to manage the selected method

  // Function to handle button click
  const handleButtonClick = (value) => {
    setAmount(value) // Set the input value to the button's value
  }

  // Function to handle manual input
  const handleInputChange = (event) => {
    setAmount(event.target.value) // Update the state with the typed value
  }

  // Function to handle method selection
  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value) // Update the selected method
  }

  return (
    <div className='main'>
      <div className="box"></div>
      <div className="recharge-amt">
        <div className="first-row">
          <button onClick={() => handleButtonClick(500)}>500</button>
          <button onClick={() => handleButtonClick(1150)}>1150</button>
          <button onClick={() => handleButtonClick(2500)}>2500</button>
        </div>
        <div className="second-row">
          <button onClick={() => handleButtonClick(3000)}>3000</button>
          <button onClick={() => handleButtonClick(3500)}>3500</button>
          <button onClick={() => handleButtonClick(5000)}>5000</button>
        </div>
      </div>
      <input 
        type="text" 
        placeholder='Amount' 
        value={amount} 
        onChange={handleInputChange} 
      />
      <div className="method-selection">
  <label className="radio-label one">
    <input 
      type="radio" 
      value="Method One" 
      checked={selectedMethod === 'Method One'} 
      onChange={handleMethodChange} 
    />
    Method One
  </label>
  <label className="radio-label two">
    <input 
      type="radio" 
      value="Method Two" 
      checked={selectedMethod === 'Method Two'} 
      onChange={handleMethodChange} 
    />
    Method Two
  </label>
</div>
<button
              className="buy-button"
              style={{
                background: 'linear-gradient(to right,   #28A745, #007bff)',
              }}
            >
              Recharge
            </button>
    </div>
  )
}

export default Recharge
