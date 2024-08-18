import React from 'react'
import './News.css'

const newsData = [
  {
    id: 1,
    image: 'https://img.freepik.com/free-photo/cyberpunk-illustration-with-neon-colors-futuristic-technology_23-2151672002.jpg?uid=R157439626&ga=GA1.1.462993494.1716703952&semt=ais_hybrid', // Image path
    headline: 'Coming soon  1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    image: 'https://img.freepik.com/free-photo/robotic-human-heart-futuristic-representation_23-2151681136.jpg?uid=R157439626&ga=GA1.1.462993494.1716703952&semt=ais_hybrid',
    headline: 'Upcoming Products 2',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 3,
    image: 'https://img.freepik.com/free-photo/ai-cloud-with-robot-head_23-2149739759.jpg?uid=R157439626&ga=GA1.1.462993494.1716703952&semt=ais_hybrid',
    headline: 'Upcoming Products 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
];
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$999',
    total: '$1999',
    daily: '$100',
    endDay: '30 Days',
    image: 'https://img.freepik.com/free-photo/3d-delivery-robot-working_23-2151150197.jpg?uid=R157439626&ga=GA1.1.462993494.1716703952&semt=ais_hybrid'
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$1999',
    total: '$2999',
    daily: '$200',
    endDay: '30 Days',
    image: 'https://img.freepik.com/free-photo/digital-art-ai-technology-background_23-2151719631.jpg?uid=R157439626&ga=GA1.1.462993494.1716703952&semt=ais_hybrid'
  }
];

const NewsSection = () => {
  return (
    <div className="news-section">
      {newsData.map(news => (
        <div className="news-item" key={news.id}>
          <img src={news.image} alt={news.headline} className="news-image" />
          <div className="news-content">
            <h2>{news.headline}</h2>
            <p>{news.description}</p>
          </div>
        </div>
      ))}
        <div className="product-section">
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
  disabled
>
  Coming Soon
</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
