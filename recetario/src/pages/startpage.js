import React from 'react';

import {NavLink} from 'react-router-dom';
import './loginpagestyles.css';

const Navigation = (props)=> 

  <nav>
      <ul>
        
        <li className="myList">
          <button className="btnCount">
            <NavLink to='/recetas' className="myUnderline">Añadir Receta</NavLink>
          </button>
        </li>
        <li className="myList">
          <button className="btnCount">
          <NavLink to='/categorias' className="myUnderline">Categorias</NavLink>
          </button>
        </li>
        <li className="myList">
          <button className="btnCount">
          <NavLink to='/todos' className="myUnderline">Ver Recetas</NavLink>
          </button>
        </li>
        <li className="myList">
          <button className="btnCount">
            <NavLink to='/' className="myUnderline">Cerrar sesión</NavLink>
          </button>
        </li>
      </ul>
  </nav>


export default function Startpage(props){
  return <div className="body">
    <h2 className="homeTxt">Home</h2>
      <Navigation />
    </div>
}