import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/actionsCreators';
import Recipe from '../Recipe';


const FavoriteList = ({ recipeIds, recipes }) => (
    <ul>
    {
      recipes.isFavorite ? recipeIds.map(id => <Recipe key={id} id={id} />) : <li> No hay favoritos! </li>
     }
    </ul>
   
);


export default connect(
  state => ({
    recipeIds: selectors.getRecipeIds(state),
    recipes: selectors.getRecipes(state),
  }),
  undefined,
)(FavoriteList);