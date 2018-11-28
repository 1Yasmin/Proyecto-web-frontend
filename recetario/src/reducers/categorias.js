import { combineReducers } from 'redux';
import * as types from '../types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_CATEGORIA:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
          
        },
      };
    case types.DELETE_CATEGORIA: {
      const newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    }
      
    default:
      return state;
  }
    
    
};

const order = (state = [], action) => {
  switch (action.type) {
    case types.ADD_CATEGORIA:
      return [...state, action.payload.id];
    case types.DELETE_CATEGORIA:
      return state.filter(id => id !== action.payload.id);
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  order,
});

//Selectores 
export const getCategoria = (state, id) => state.byId[id];
export const getCategoriaIds = (state) => state.order;
export const getCategorias = (state) => state.order.map(
  id => getCategoria(state, id),
);