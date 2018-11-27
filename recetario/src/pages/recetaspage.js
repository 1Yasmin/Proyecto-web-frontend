import React from 'react';
import RecipeApp from '../components/RecipeApp';

import {NavLink} from 'react-router-dom';
const Navigation = (props)=> <nav>
      <ul>
      <li>
      <NavLink to='/'>Log Out</NavLink>
      </li>
      <li>
      <NavLink to='/favoritos'>Favoritos</NavLink>
      </li>
      </ul>
      </nav>


export default function Recetaspage(props){
  return <div>
    <h2>Nueva Receta</h2>
      <RecipeApp />
      <Navigation />
    </div>
}