import React from 'react';
import {  BrowserRouter, Switch,Route } from 'react-router-dom';
import LoginPage from './pages/loginpage';
import FavoritePage from './pages/favoritepage';
import RecetasPage from './pages/recetaspage';
import SigninPage from './pages/signuppage';
import StartPage from './pages/startpage';

//rutas de las paginas
const Router = () => (
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <Route exact path='/signup' component={SigninPage} />
      <Route exact path='/recetas' component={RecetasPage} />
      <Route exact path='/favoritos' component={FavoritePage} />
      <Route exact path='/start' component={StartPage} />
    </Switch>
);

export default Router;