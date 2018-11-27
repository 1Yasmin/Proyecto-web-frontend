import React from 'react';

import {NavLink} from 'react-router-dom';
const Navigation = (props)=> <nav>
      <ul>
        <li>
          <button>
            <NavLink to='/'>cerrar sesión</NavLink>
          </button>
        </li>
        <li>
          <NavLink to='/recetas'>Añadir Receta</NavLink>
        </li>
        <li>
          <NavLink to='/favoritos'>Categorias</NavLink>
        </li>
        <li>
          <NavLink to='/favoritos'>Ver Recetas</NavLink>
        </li>
      </ul>
      </nav>


export default function Startpage(props){
  return <div>
    <h2>Home</h2>
      <Navigation />
    </div>
}