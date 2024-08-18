import React from 'react';
import './ProductPage.css';




const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$999',
    total: '$1999',
    daily: '$100',
    endDay: '30 Days',
    image: 'https://img.freepik.com/free-photo/view-vacuum-cleaner-robot-flat-surface-floor_23-2151736775.jpg?uid=R157439626&ga=GA1.1.462993494.1716703952&semt=ais_hybrid'
  },
  {
    id: 1,
    name: 'Product 2',
    price: '$1999',
    total: '$2999',
    daily: '$200',
    endDay: '30 Days',
    image: 'https://img.freepik.com/free-photo/neon-robot-vacuum-cleaner_23-2151349225.jpg?uid=R157439626&ga=GA1.1.462993494.1716703952&semt=ais_hybrid'
  },
  {
    id: 1,
    name: 'Product 1',
    price: '$2999',
    total: '$3999',
    daily: '$400',
    endDay: '30 Days',
    image: 'https://img.freepik.com/free-photo/neon-robot-vacuum-cleaner_23-2151349251.jpg?uid=R157439626&ga=GA1.1.462993494.1716703952&semt=ais_hybrid'
  },
  {
    id: 1,
    name: 'Product 1',
    price: '$2999',
    total: '$3999',
    daily: '$400',
    endDay: '30 Days',
    image: 'https://img.freepik.com/free-photo/ordinary-human-job-performed-by-anthropomorphic-robot_23-2151008347.jpg?uid=R157439626&ga=GA1.1.462993494.1716703952&semt=ais_hybrid'
  },
  {
    id: 1,
    name: 'Product 1',
    price: '$2999',
    total: '$3999',
    daily: '$400',
    endDay: '30 Days',
    image: 'https://img.freepik.com/free-photo/robots-working-factory-instead-humans_23-2150912069.jpg?uid=R157439626&ga=GA1.1.462993494.1716703952&semt=ais_hybrid'
  },
  {
    id: 1,
    name: 'Product 1',
    price: '$2999',
    total: '$3999',
    daily: '$400',
    endDay: '30 Days',
    image: 'https://img.freepik.com/free-photo/person-using-ar-technology-perform-their-occupation_23-2151137532.jpg?uid=R157439626&ga=GA1.1.462993494.1716703952&semt=ais_hybrid'
  },
  // Aise hi aur products add karein
];

const ProductPage = () => {
  return (
    <div className="product-container">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-details">
            <div className="left-section">
              <p className="product-price"><span className='black'>Price:</span> {product.price}</p>
              <p className="product-total"><span className='black'>Total:</span> {product.total}</p>
            </div>
            <div className="right-section">
              <p className="product-daily"><span className='black'>Daily:</span> {product.daily}</p>
              <p className="product-endDay"><span className='black'>End Day:</span> {product.endDay}</p>
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
  );
}


export default ProductPage;
