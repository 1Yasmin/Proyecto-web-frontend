import { combineReducers } from 'redux';
import * as types from '../types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_RECIPE:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
          
        },
      };
    case types.DELETE_RECIPE: {
      const newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    }
    
    case types.CONFIRM_RECIPE: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...newState[action.payload.id],
        isFavorite: true,
      }
      return newState;
    }
    default:
      return state;
  }
    
    
};

const order = (state = [], action) => {
  switch (action.type) {
    case types.ADD_RECIPE:
      return [...state, action.payload.id];
    case types.DELETE_RECIPE:
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
export const getRecipe = (state, id) => state.byId[id];
export const getRecipeIds = (state) => state.order;
export const getRecipes = (state) => state.order.map(
  id => getRecipe(state, id),
);