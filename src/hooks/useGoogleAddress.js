import { useState, useEffect } from 'react';
import axios from 'axios';

const useGooGleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=IzaSyASuRwgDQiUU5LPjDIIR6007bDE20tXvIg`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
  }, []);
  return map;
};
export default useGooGleAddress;
