import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/components/Products.css';

const Products = () => {
  const {  addToCart, products } = useContext(AppContext);

  const handleAddToCart = (product) => () => {
    console.log('added to cart!')
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.data?.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
