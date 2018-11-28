import React from 'react';
import CategoriaForm from '../CategoriaForm';
import CategoriaList from '../CategoriaList';

const CategoriaApp = () => (
  <div className="categoriasApp">
   <CategoriaList />
    <h2>
      { 'Nueva categoria:' }
    </h2>
    <CategoriaForm />
  </div>
);

export default CategoriaApp;