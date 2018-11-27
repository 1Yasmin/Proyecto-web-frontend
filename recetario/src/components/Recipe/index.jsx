import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';
import * as actions from '../../actions/actionsCreators';

const Recipe = ({ titulo, descripcion, onDelete }) => (
  <li>
    { titulo }
    <br/>
    { descripcion }
    <a onClick={onDelete}>
      &times;
    </a>
    
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
  }),
)(Recipe);
