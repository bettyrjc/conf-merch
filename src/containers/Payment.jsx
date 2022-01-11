import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useHistory } from 'react-router-dom';

import { PayPalButton } from 'react-paypal-button';
import '../styles/components/Payment.css';
const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useHistory();

  const paypalOptions = {
    clientId:
      'AReCbyHiGMu15lcTo3nqwCN8K7ydN1exEtNZDJHcdDpo4KS8anobVmI7R391i_TfJczax-AWhe-IEKn7',
    intent: 'capture',
    currency: 'USD',
  };
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const handlePaymentSuccess = (data) => {
    const newOrder = {
      buyer: buyer,
      products: cart,
      payment: data,
    };

    addNewOrder(newOrder);
    console.log('push!', newOrder);
    history.push('/checkout/success');
  };
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3> Resumen del pedido</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.id}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('start payment')}
            onPaymentSuccess={(data) => console.log(data)}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div className="Payment-"></div>
    </div>
  );
};

export default Payment;
