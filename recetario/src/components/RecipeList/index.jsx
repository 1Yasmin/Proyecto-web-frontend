import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/actionsCreators';
import Recipe from '../Recipe';


const RecipeList = ({ recipeIds }) => (
    <ul>
      { recipeIds.map(id => <Recipe key={id} id={id} />) }
    </ul>
   
);


export default connect(
  state => ({
    recipeIds: selectors.getRecipeIds(state),
  }),
  undefined,
)(RecipeList);