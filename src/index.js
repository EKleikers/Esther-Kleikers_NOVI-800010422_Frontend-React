import React from 'react';
import { BrowserRouter as Router,} from 'react-router-dom';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {AuthProvider} from './context/AuthContext'


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
                <App/>
            </AuthProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
