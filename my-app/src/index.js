import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    

<React.StrictMode>
    <Auth0Provider
      domain="app-music.eu.auth0.com"
      clientId="kpWw1pPj0iJiVM1S2PLDioMOY1JOhiMz"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);


