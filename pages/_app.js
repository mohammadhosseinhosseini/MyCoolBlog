import React from 'react';
import App from 'next/app';
import NavBar from '../Components/NavBar';
import '../Styles/style.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className='app'>
        <NavBar />
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
