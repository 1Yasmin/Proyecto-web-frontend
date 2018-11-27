import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import users, * as fromUsers from './users';
import recipes, * as fromRecipes from './recipes';

const Rootreducer = combineReducers({
  users,
  recipes,
  form: formReducer,
});

export default Rootreducer;

export const getUser = (state, id) =>
  fromUsers.getUser(state.users, id);
export const getUserIds = (state) => fromUsers.getUserIds(
  state.users,
);
  
export const getUsers = (state) =>
  fromUsers.getUsers(state.users);

export const getRecipe = (state, id) =>
  fromRecipes.getRecipe(state.recipes, id);

export const getRecipeIds = (state) => fromRecipes.getRecipeIds(
  state.recipes,
);

export const getRecipes = (state) =>
  fromRecipes.getRecipes(state.recipes);
