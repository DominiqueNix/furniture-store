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
    redirect_uri: 'https://grand-nougat-e75839.netlify.app/admin',
    ...(config.audience ? { audience: config.audience } : null),
  },
};
root.render(
  <Auth0Provider {...providerConfig} >
      <App />  
    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
