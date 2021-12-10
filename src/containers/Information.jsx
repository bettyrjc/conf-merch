import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Information.css';
const Information = () => {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2> Informacion de contacto</h2>
        </div>
        <div className="Information-form">
          <input
            type="text"
            className="form-control"
            placeholder="nombre completo"
            name="name"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Correo electronico"
            name="email"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Dirección"
            name="address"
          />
          <input
            type="text"
            className="form-control"
            placeholder="nombre completo"
            name="name"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Apto"
            name="apto"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Apto"
            name="apto"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Ciudad"
            name="city"
          />
          <input
            type="text"
            className="form-control"
            placeholder="País"
            name="country"
          />
          <input
            type="text"
            className="form-control"
            placeholder="
            estado"
            name="state"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Codigo psotar"
            name="cp"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Telefono"
            name="phone"
          />
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <Link to="/checkout/payment">Pagar</Link>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedidos</h3>
        <div className="Information-element">
          <h4>
            {' '}
            Item name <span>10$</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Information;
