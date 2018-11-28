import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/actionsCreators';
import Recipe from '../Recipe';


const FavoriteList = ({ recipeIds }) => (
    Recipe.isFavorite ? (
    <ul>
      { recipeIds.map(id => <Recipe key={id} id={id} />) }
    </ul>) : (
    <div>
     No hay favoritos
      </div>
    )
   
);


export default connect(
  state => ({
    recipeIds: selectors.getRecipeIds(state),
  }),
  undefined,
)(FavoriteList);