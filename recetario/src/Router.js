import React from 'react';
import {  BrowserRouter, Switch,Route } from 'react-router-dom';
import LoginPage from './pages/loginpage';
//import FavoritesPage from './pages/favoritespage';
//import HomePage from './pages/homepage';
import SigninPage from './pages/signuppage';


const Router = () => (
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <Route exact path='/signup' component={SigninPage} />
    </Switch>
);

export default Router;