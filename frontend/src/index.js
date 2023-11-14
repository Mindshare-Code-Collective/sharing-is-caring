import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AppProvider>
      <App />
    </AppProvider>
  </Router>
);



