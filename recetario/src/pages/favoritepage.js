import React from 'react';
import {NavLink} from 'react-router-dom';

import FavoriteList from '../components/FavoriteList';

const Navigation = (props)=> <nav>
      <ul>
      <li>
      <NavLink to='/'>Log Out</NavLink>
      </li>
      <li>
      <NavLink to='/start'>Home</NavLink>
      </li>
      <li>
      <NavLink to='/todos'>Mis Recetas</NavLink>
      </li>
      <li>
      <NavLink to='/favoritos'>Favoritos</NavLink>
      </li>
      <NavLink to='/AllRecipes'>Más Recetas</NavLink>
      </ul>
      </nav>


export default function Favoritepage(props){
  return <div>
    <h2>Favoritos</h2>
    <FavoriteList />
    <Navigation />
    </div>
}