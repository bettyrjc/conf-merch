import React from 'react';
import { Link } from 'react-router-dom';
import { HiShoppingBag } from 'react-icons/hi';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header-title">Platsiconf merch</h1>
      </Link>
      <div className="Header-checkout">
        <Link to="/checkout">
          <HiShoppingBag />
        </Link>
      </div>
    </div>
  );
};

export default Header;
