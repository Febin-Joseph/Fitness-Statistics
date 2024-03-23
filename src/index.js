import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import AppRoutes from './routes/AppRoutes';
import Nav from './components/common/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <AppRoutes />
  </React.StrictMode>
);