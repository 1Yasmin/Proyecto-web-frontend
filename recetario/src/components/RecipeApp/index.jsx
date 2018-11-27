import React from 'react';
import RecipeForm from '../RecipeForm';
import RecipeList from '../RecipeList';

const RecipeApp = () => (
  <div className="recipesApp">
   <RecipeList />
    <h2>
      { 'Nueva receta:' }
    </h2>
    <RecipeForm />
  </div>
);

export default RecipeApp;