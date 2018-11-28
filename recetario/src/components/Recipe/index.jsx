import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';
import * as actions from '../../actions/actionsCreators';

const Recipe = ({ titulo, ingredientes, descripcion, categoria, isFavorite, onDelete, onFavorite }) => (
  <li>
    <h1> { titulo } </h1>
    Ingredientes:  { ingredientes }
    <br/>
    <br/>
    Descripcion:  { descripcion }
    <br/>
    Categoria: {categoria}
    <br/>
    <button onClick={onFavorite}>
      Agregar a favoritos
    </button>
    <br/>
    <button onClick={onDelete}>
      Remover receta
    </button>
    
  </li>
);

export default connect(
  (state, { id }) => ({
    ...selectors.getRecipe(state, id),
  }),
  (dispatch, { id }) => ({
    onDelete() {
      dispatch(actions.removeRecipe(id));
    },
    onFavorite() {
      dispatch(actions.confirmFavorite(id));
    },
  }),
)(Recipe);
