import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/js/bootstrap'
import './index.css';
import {Hero} from './components/Hero/Hero'
import { Main } from './components/Main/Main';
import { FooterBottom } from './components/FooterBottom/FooterBottom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hero />
    <Main />
    <FooterBottom /> 
  </React.StrictMode>
);