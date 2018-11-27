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
      <NavLink to='/nuevaCategoria'>Crear Categoría</NavLink>
      </li>
      </ul>
      </nav>


export default function Categoriapage(props){
  return <div>
    <h2>Categorias</h2>
    <Navigation />
    </div>
}