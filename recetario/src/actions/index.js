import * as types from '../types';

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