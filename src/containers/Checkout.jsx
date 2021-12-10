import React from 'react';
import { Link } from 'react-router-dom';
import { HiXCircle } from 'react-icons/hi';

import '../styles/components/Checkout.css';

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de pedidos</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
          <button
            type="button"
            styles={{
              color: 'blue',
              fontSize: '14px',
            }}
          >
            <HiXCircle />
          </button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3> Precio total: 10$</h3>
        <button type="button" className="">
          <Link to="/checkout/information">Continuar pedido</Link>
        </button>
      </div>
    </div>
  );
};

export default Checkout;
