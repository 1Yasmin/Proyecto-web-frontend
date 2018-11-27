import React from 'react';

import {NavLink} from 'react-router-dom';
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


export default function TodosPage(props){
  return <div>
      <h2>Recetas</h2>
      <Navigation />
    </div>
}