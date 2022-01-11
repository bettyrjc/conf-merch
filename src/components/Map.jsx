import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  console.log('data succ', data)
  const containerStyle = {
    height: '50vh',
    width: '100%',
  };
  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyASuRwgDQiUU5LPjDIIR6007bDE20tXvIg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={9}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
