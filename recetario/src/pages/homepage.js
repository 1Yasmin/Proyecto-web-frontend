import React from 'react';

import {NavLink} from 'react-router-dom';
const Navigation = (props)=> <nav>
      <ul>
      <li>
      <NavLink to='/'>Log Out</NavLink>
      </li>
      <li>
      <NavLink to='/favoritos'>Favoritos</NavLink>
      </li>
      </ul>
      </nav>


export default function Homepage(props){
  return <div>
    <h2>Home</h2>
    <Navigation />
    </div>
}