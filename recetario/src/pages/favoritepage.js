import React from 'react';
import FavoriteList from '../components/FavoriteList';

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


export default function Favoritepage(props){
  return <div>
     <Navigation />
    <h2>Favoritos</h2>
    <FavoriteList />
   
    </div>
}