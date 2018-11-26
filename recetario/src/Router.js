import React from 'react';
import {  BrowserRouter, Switch,Route } from 'react-router-dom';
import LoginPage from './pages/loginpage';
import FavoritePage from './pages/favoritepage';
import HomePage from './pages/homepage';
import SigninPage from './pages/signuppage';


const Router = () => (
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <Route exact path='/signup' component={SigninPage} />
      <Route exact path='/home' component={HomePage} />
      <Route exact path='/favoritos' component={FavoritePage} />
    </Switch>
);

export default Router;