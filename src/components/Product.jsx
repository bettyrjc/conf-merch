import React from 'react';
import '../styles/components/Products.css';

const Product = ({ product }) => {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.name} />
      <div className="Product-item-info">
        <h2>
          {product.title}
          <span>{product.price}</span>
        </h2>
        <p>{product.description}</p>
        <button className="" type="button">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Product;
