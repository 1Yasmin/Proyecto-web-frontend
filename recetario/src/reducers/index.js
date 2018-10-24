import * as types from '../types';

const recipeReducer = (state={},action)=>{
  switch(action.type){
    case types.ADD_RECIPE:
      return [...state, action.payload]
      
    
    case types.DELETE_RECIPE:{
      const newState = {...state};
      delete newState[action.id];
      return newState;
    }
    default:
      return state;
  }
}

export default recipeReducer;