import React from 'react';

import Receta from './Receta';

const RecetaList = ({ 
  recetas=[] }) => (
  <ul>
  Recetas
    {recetas.map((receta, index) => (
      <Receta key={index} {...receta}  />
    ))}
  </ul>
)

export default RecetaList;