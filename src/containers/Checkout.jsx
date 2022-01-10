import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiXCircle } from 'react-icons/hi';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;
  console.log('cart', cart);

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos</h3> : <h3>Sin pedidos...</h3>}
        {cart.map((item) => (
          <div className="Checkout-item" key={item.id}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
            <button
              type="button"
              styles={{
                color: 'blue',
                fontSize: '14px',
              }}
              onClick={handleRemove(item)}
            >
              <HiXCircle />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3> {`Precio total: ${handleSumTotal()}`}</h3>
          <button type="button" className="">
            <Link to="/checkout/information">Continuar pedido</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
