import './bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { 
    BrowserRouter, 
    Route,
    Routes,
} from 'react-router-dom';

import { NavigationBar } from './Navigation'

import { 
    ReviewsPage,
} from './Pages'


ReactDOM.render(
    <BrowserRouter>
        <NavigationBar />
        <Routes>
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/" element={<App />} />
        </Routes>
    </BrowserRouter>
, document.getElementById('root'));
