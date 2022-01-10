import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiShoppingBag } from 'react-icons/hi';
import '../styles/components/Header.css';
import AppContext from '../context/AppContext';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header-title">Platsiconf merch</h1>
      </Link>
      <div className="Header-checkout">
        <Link to="/checkout">
          <HiShoppingBag />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;
