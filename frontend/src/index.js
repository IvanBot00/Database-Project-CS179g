import 'bootstrap/dist/css/bootstrap.min.css';  
// import './bootstrap.min.css';
import './bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { 
    BrowserRouter, 
    Switch,
    Route,
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
            <Switch>
                <Route exact path='/user'>
                    <UserPage />
                </Route>
                <Route path='/business'>
                    <BusinessesPage />
                </Route>
                {/* <Route path='/'>
                    <App />
                </Route> */}
            </Switch>
        </Container>
    </BrowserRouter>
, document.getElementById('root'));
