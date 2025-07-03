import React from 'react' 
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'; 
import './index.css';
import { Router } from './routers/Router.jsx'; 
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} /> 
    <ToastContainer />
  </StrictMode>
);