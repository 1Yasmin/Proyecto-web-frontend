import React from 'react';
import CategoriaApp from '../components/CategoriaApp';
import './loginpagestyles.css';

import {NavLink} from 'react-router-dom';


const Navigation = (props)=> <nav className="navHeader">
      <ul className="myList">
      <li>
      <NavLink to='/'><button className="logoutBtn">Log Out</button></NavLink>
      </li>
      <li>
      <NavLink to='/start'><i class="material-icons homeIcon">home</i></NavLink>
      
      </li>
      </ul>
      </nav>

export default function Categoriapage(props){
  return <div>
     <Navigation />
    <h2>Categorias</h2>   
    <CategoriaApp />
    </div>
}