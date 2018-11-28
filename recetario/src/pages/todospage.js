import React from 'react';
import RecipeList from '../components/RecipeList';

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



const Navigation2 = (props)=> <nav>
      <ul>
      <li>
      <NavLink to='/todos'>Mis Recetas</NavLink>
      </li>
      <li>
      <NavLink to='/favoritos'>Favoritos</NavLink>
      </li>
      </ul>
      </nav>


export default function TodosPage(props){
  return <div>
      <Navigation />
      <h2>Recetas</h2>
      <RecipeList />
     <Navigation2 />
      
    </div>
}