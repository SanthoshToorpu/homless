import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Auth0Provider } from "@auth0/auth0-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
ReactDOM.render(
    
    <Auth0Provider
    domain="dev-xp8wz5fvf63o2nva.us.auth0.com"
    clientId="2TsooUCI14JqkplcShYlOrVdhDzUcKby"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Router>
        <App />
    </Router>
  </Auth0Provider>
    , document.getElementById('root')
    )