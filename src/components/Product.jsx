import React from 'react';
import '../styles/components/Products.css';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="Products-item">
      {/* <img src={`http:http://localhost:1337/${product.image[0].url}`} alt={product.name} /> */}
      <div className="Product-item-info">
        <h2>
          {product.attributes.title}
          <span>{product.attributes.price}</span>
        </h2>
        <p>{product.attributes.description}</p>
        <button className="" type="button" onClick={handleAddToCart(product)}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Product;
