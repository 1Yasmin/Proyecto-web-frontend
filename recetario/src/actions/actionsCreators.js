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
