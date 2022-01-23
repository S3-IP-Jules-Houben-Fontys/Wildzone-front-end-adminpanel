import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Auth0ProviderWithHistory from './auth0/auth0-provider-with-history';

ReactDOM.render(
    <Auth0ProviderWithHistory>
        <React.StrictMode>
            <Router>
                <Route path="/" component={App} />
            </Router>
        </React.StrictMode>
    </Auth0ProviderWithHistory>,
    document.getElementById('root')
);

