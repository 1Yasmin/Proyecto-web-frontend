import * as types from '../types';

export const addUser = (id, firstName, lastName, email, username) => ({
  type: types.USER_ADDED,
  payload: {
    id,
    firstName,
    lastName,
    email,
    username,
  },
});

export const removeUser = id => ({
  type: types.USER_REMOVED,
  payload: { id },
});

export const confirmUser = id => ({
  type: types.USER_CONFIRMED,
  payload: { id },
});

export const addRecipe = (titulo,descripcion)=>({
    type:types.ADD_RECIPE,
    payload:{
      titulo,
      descripcion
    }
  
});

export const deleteRecipe = id =>({
  type:types.DELETE_RECIPE,
  id
});