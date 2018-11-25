import * as types from '../types';

//acciones de usuario
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

//acciones de receta
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

//autenticacion
export const loginStarted = () => ({
    type: types.LOGIN_STARTED
  
});

export const loginSuccess = token => ({
  type: types.LOGIN_SUCCEED,
  token:token
});

export const loginFail = error =>({
  type: types.LOGIN_FAILED,
  error: error,
});
