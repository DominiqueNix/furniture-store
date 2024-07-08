import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react'
import config from './config.json'

const root = ReactDOM.createRoot(document.getElementById('root'));

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  // onRedirectCallback,
  authorizationParams: {
    redirect_uri: 'http://localhost:3000/admin',
    ...(config.audience ? { audience: config.audience } : null),
  },
};

root.render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig} >
      <App />  
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
