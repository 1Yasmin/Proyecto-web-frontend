import * as types from '../types';

//acciones de usuario
export const addUser = (id, first_name, last_name, email, password, username) => ({
  type: types.USER_ADDED,
  payload: {
    id,
    first_name,
    last_name,
    email,
    password,
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
export const addRecipe = (id, titulo, descripcion) => ({
  type: types.ADD_RECIPE,
  payload: {
    id,
    titulo,
    descripcion,
      
  },
});

export const removeRecipe = id => ({
  type: types.DELETE_RECIPE,
  payload: { id },
});

//autenticacion
export const loginStarted = (username, password) => ({
    type: types.LOGIN_STARTED,
    payload: {
      username, 
      password,
    }  
});

export const loginSuccess = (token, id, username) => ({
  type: types.LOGIN_SUCCEED,
  payload:{
    token,
    id,
    username
  }
});

export const loginFail = error =>({
  type: types.LOGIN_FAILED,
  error: error,
});




