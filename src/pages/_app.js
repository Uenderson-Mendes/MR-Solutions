// pages/_app.js
import '../style/style.css';
import '../style/heade.css';
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Header from '../components/headers/header';
import '../js/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/img/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <title>MR SOLUTIONS</title>
        
        {/* Adicione outros metadados ou links de estilo conforme necessário */}
      </Head>
      <Header/>
      <Component {...pageProps} />
      <script defer src='script.js'></script>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;