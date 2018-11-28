import React from 'react';
import RecipeApp from '../components/RecipeApp';

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


export default function Recetaspage(props){
  return <div>
      <Navigation />  
      <RecipeApp />
    </div>
}

