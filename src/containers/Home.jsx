import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Products from '../components/Products';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Platzi conf merch - productos</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bettyrjce" />
        <meta name="twitter:creator" content="@bettyrjce" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Platzi Conf Store" />
        <meta property="og:title" content="Platzi Conf Store" />
        <meta property="og:description" content="Platzi Conf Store" />
        <meta property="og:site_name" content="Platzi Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Products />
    </>
  );
};

export default Home;
