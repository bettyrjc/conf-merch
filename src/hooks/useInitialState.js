import { useState, useEffect } from 'react';
import initialState from '../initialState';
import axios from 'axios';

const API = 'http://localhost:1337/api/products';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios(API);
    console.log(response);
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };
  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    state,
    addToBuyer,
    addNewOrder,
    products,
  };
};

export default useInitialState;
