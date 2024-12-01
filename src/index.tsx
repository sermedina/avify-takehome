import React from 'react';
import ReactDOM from 'react-dom/client';  // Asegúrate de importar desde 'react-dom/client'
import { App } from './app';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('reactMountPoint')!); 
root.render(<App />);