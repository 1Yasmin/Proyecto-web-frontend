import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { persistCombineReducers } from 'redux-persist';

import users, * as fromUsers from './users';
import recipes, * as fromRecipes from './recipes';
import categorias, * as fromCategorias from './categorias';


const Rootreducer = combineReducers({
  users,
  recipes,
  categorias,
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

export const getCategoria = (state, id) =>
  fromCategorias.getCategoria(state.categorias, id);

export const getCategoriaIds = (state) => fromCategorias.getCategoriaIds(
  state.categorias,
);

export const getCategorias = (state) =>
  fromCategorias.getCategorias(state.categorias);

