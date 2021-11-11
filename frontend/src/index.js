import 'bootstrap/dist/css/bootstrap.min.css';  
// import './bootstrap.min.css';
import './bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { 
    BrowserRouter as Router, 
    Switch,
    Route,
} from 'react-router-dom';

import { NavigationBar } from './Navigation'

import { Container } from 'react-bootstrap'

import { 
    UserPage,
    BusinessesPage,
    UserProfilePage,
} from './Pages'


ReactDOM.render(
    <Router>
        <NavigationBar />
        <Container>
            <Switch>
                <Route path='/user/:id'>
                    <UserProfilePage />
                </Route>
                <Route exact path='/user'>
                    <UserPage />
                </Route>
                <Route path='/business'>
                    <BusinessesPage />
                </Route>
                <Route path='/'>
                    <App />
                </Route>
            </Switch>
        </Container>
    </Router>
, document.getElementById('root'));
