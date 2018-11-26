import React from 'react';

import {NavLink} from 'react-router-dom';
const Navigation = (props)=> <nav>
      <ul>
      <li>
      <NavLink to='/'>Log Out</NavLink>
      </li>
      <li>
      <NavLink to='/home'>Home</NavLink>
      </li>
      </ul>
      </nav>


export default function Favoritepage(props){
  return <div>
    <h2>Favoritos</h2>
    
    <Navigation />
    </div>
}