import 'bootstrap/dist/css/bootstrap.min.css';  
// import './bootstrap.min.css';
import './bootstrap.css';
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

import { Container } from 'react-bootstrap'

import { 
    UserPage,
    BusinessesPage,
} from './Pages'


ReactDOM.render(
    <BrowserRouter>
        <NavigationBar />
        <Container>
            <Routes>
                <Route path='/users' element={<UserPage />} />
                <Route path='businesses' element={<BusinessesPage />} />
                <Route path="/" element={<App />} />
            </Routes>
        </Container>
    </BrowserRouter>
, document.getElementById('root'));
