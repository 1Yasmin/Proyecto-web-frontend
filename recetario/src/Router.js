import React from 'react';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/homepage';
import FavoritesPage from './pages/favoritespage';
const Router = () => (
  <Switch>
  <Route exact path='/' component={HomePage} />
  <Route exact path='/favoritos' component={FavoritesPage} />
  </Switch>
);

export default Router;