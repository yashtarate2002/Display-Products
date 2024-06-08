import React from 'react';
import '../Style/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
  <>
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="product-button">View Details</button>
      </div>
    </div>
  </>
  );
};

export default ProductCard;
