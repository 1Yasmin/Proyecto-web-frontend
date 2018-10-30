import * as types from '../types';
import isPromise from 'is-promise';
import jwt_decode from 'jwt-decode';

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

//acciones de login
export const logout = (extra = {}) => ({
  type: types.LOGOUT,
  payload: { ...extra }
});

export const startLogin = (username, password, extra = {}) => ({
  type: types.LOGIN_STARTED,
  payload: { username, password, ...extra }
});

export const completeLogin = (token, decoded, extra = {}) => ({
  type: types.LOGIN_SUCCEED,
  payload: { token, decoded, ...extra }
});

export const failLogin = payload => ({
  type: types.LOGIN_FAILED,
  payload
});

export const login = apiLogin =>
  (username, password) =>
    dispatch => {
      dispatch(startLogin(username));

      return apiLogin(username, password).then(
        token => {
          const decoded = jwt_decode(token)
          dispatch(completeLogin(token, decoded));
          return { token, decoded }
        }
      ).catch( e => {
        const { message, promise, ...rest } = e;

        if(isPromise(promise))
          return promise.then(extra =>
            dispatch(
              failLogin(message, extra)))

        return alert("ha ocurrido un error");
      })
  }
