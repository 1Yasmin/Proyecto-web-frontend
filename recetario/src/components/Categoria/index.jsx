import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';
import * as actions from '../../actions/actionsCreators';

const Categoria = ({ nombre, onDelete }) => (
  <li>
    { nombre } 
    <br />
    <button onClick={onDelete}>
      Remover categoria
    </button>
    
  </li>
);

export default connect(
  (state, { id }) => ({
    ...selectors.getCategoria(state, id),
  }),
  (dispatch, { id }) => ({
    onDelete() {
      dispatch(actions.removeCategoria(id));
    },
  }),
)(Categoria);
