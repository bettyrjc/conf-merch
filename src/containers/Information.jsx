import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

import '../styles/components/Information.css';
const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const history = useHistory();
  const form = useRef(null);
  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      city: formData.get('city'),
      apto: formData.get('apto'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2> Informacion de contacto</h2>
        </div>
        <form className="Information-form" ref={form}>
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
        </form>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" className="" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedidos</h3>
        {cart.map((item) => (
          <div className="Information-element" key={item.id}>
            <h4>
              {' '}
              {item.title} <span>{item.price}</span>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
