import React from 'react';
import { Link } from 'react-router-dom';
import './Page1.css';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$999',
    total: '$1999',
    daily: '$100',
    endDay: '30 ',
    image: 'https://img.freepik.com/free-photo/view-vacuum-cleaner-robot-flat-surface-floor_23-2151736775.jpg?uid=R157439626&ga=GA1.1.462993494.1716703952&semt=ais_hybrid'
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$1999',
    total: '$2999',
    daily: '{"\u20B9"}100',
    endDay: '30 ',
    image: 'https://img.freepik.com/free-photo/neon-robot-vacuum-cleaner_23-2151349225.jpg?uid=R157439626&ga=GA1.1.462993494.1716703952&semt=ais_hybrid'
  }
];

const Page1 = () => {
  return (
    <div className="container">
      <div className="top-img">
        <img
          src="https://img.freepik.com/free-photo/cryptocurrency-concept-with-bitcoin_23-2149153402.jpg?uid=R157439626&ga=GA1.1.462993494.1716703952&semt=ais_hybrid"
          alt="Crypto"
        />
      </div>
      <div className="icons-container">
        <div className="icon-item">
          <Link to="/recharge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
            <span>Recharge</span>
          </Link>
        </div>

        <div className="icon-item">
          <Link to="/withdraw">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23L384 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l174.1 0L535 41zM105 377l-23 23L256 400c13.3 0 24 10.7 24 24s-10.7 24-24 24L81.9 448l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64l241.9 0c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52l117.4 0c-4 17 .6 35.5 13.8 48.8c20.3 20.3 53.2 20.3 73.5 0L608 169.5 608 384c0 35.3-28.7 64-64 64l-241.9 0c3.7-7.2 5.9-15.3 5.9-24c0-28.7-23.3-52-52-52l-117.4 0c4-17-.6-35.5-13.8-48.8c-20.3-20.3-53.2-20.3-73.5 0L32 342.5 32 128c0-35.3 28.7-64 64-64zm64 64l-64 0 0 64c35.3 0 64-28.7 64-64zM544 320c-35.3 0-64 28.7-64 64l64 0 0-64zM320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
            </svg>
            <span>Withdraw</span>
          </Link>
        </div>
        <div className="icon-item">
          <Link to="/refer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
            </svg>
            <span>Refer</span>
          </Link>
        </div>
        <div className="icon-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM128 256l0 32L256 416 384 288l0-32-80 0 0-128-96 0 0 128-80 0z" />
          </svg>
          <span>Download</span>
        </div>
      </div>
      <h2>Latest and Special Products</h2>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
           <div className="product-info">
  <div className="left-section">
    <h3>{product.name}</h3>
    <p>Price: {product.price}</p>
  </div>
  <div className="right-section">
    <p>Total: {product.total}</p>
    <p>Daily: {product.daily}</p>
    <p>End Day: {product.endDay}</p>
  </div>
</div>

            <button
  className="buy-button"
  style={{
    background: 'linear-gradient(to right, #FF9500, #FF6800)',
  }}
>
  Buy Now
</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page1;
