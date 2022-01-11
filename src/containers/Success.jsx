import React, { useContext } from 'react';
import Map from '../components/Map';
import AppContext from '../context/AppContext';
import useGooGleAddress from '../hooks/useGoogleAddress';

import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGooGleAddress(buyer[0].address)
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name} , gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección</span>
      </div>
      <div className="Success-map">
        <Map data={location} />
      </div>
    </div>
  );
};

export default Success;
