import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
    <Auth0Provider
        domain="dev-x29zxj34xc.eu.auth0.com"
        clientId="twtYh9Q9SmYaKAgJ60gR58zXUBJhsQoY"
        redirectUri={window.location.origin}
    >
        <React.StrictMode>
            <Router>
                <Route path="/" component={App} />
            </Router>
        </React.StrictMode>
    </Auth0Provider>,
    document.getElementById('root')
);

