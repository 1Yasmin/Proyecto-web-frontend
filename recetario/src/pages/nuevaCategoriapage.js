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
      </ul>
      </nav>


export default function NuevaCategoriapage(props){
  return <div>
    <h2>Nueva Categoría</h2>
    
    <Navigation />
    </div>
}