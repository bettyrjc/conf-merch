import React from 'react';
import '../styles/components/Success.css';
const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Oscar, gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección</span>
      </div>
      <div className="Success-map">Google map</div>
    </div>
  );
};

export default Success;
