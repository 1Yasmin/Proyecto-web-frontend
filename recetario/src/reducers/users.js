import { combineReducers } from 'redux';

import * as types from '../types';


const byId = (state = {}, action) => {
  switch (action.type) {
    case types.USER_ADDED:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
          isConfirmed: false,
        },
      };
    case types.USER_REMOVED: {
      const newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    }
    case types.USER_CONFIRMED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...newState[action.payload.id],
        isConfirmed: true,
      };
      return newState;
    }
    case types.LOGIN_SUCCEED: {
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,          
        },
      }
    }
    default:
      return state;
  }
};

const order = (state = [], action) => {
  switch (action.type) {
    case types.USER_ADDED:
      return [...state, action.payload.id];
    case types.USER_REMOVED:
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
export const getUser = (state, id) => state.byId[id];
export const getUserIds = (state) => state.order;
export const getUsers = (state) => state.order.map(
  id => getUser(state, id),
);