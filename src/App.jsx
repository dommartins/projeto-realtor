import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';
import Router from './router/Router';

export default function App() {
  return (
    <React.Fragment>
        <Navigation/>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
        <Footer/>
    </React.Fragment>
  )
}
