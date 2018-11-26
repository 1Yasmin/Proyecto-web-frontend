import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';
import * as actions from '../../actions/actionsCreators';

const Recipe = ({ titulo, contenido, onDelete }) => (
  <li>
    { titulo }
    </br>
    { contenido }
    <a onClick={onDelete}>
      &times;
    </a>
    
  </li>
);

export default connect(
  (state, { id }) => ({
    ...selectors.getUser(state, id),
  }),
  (dispatch, { id }) => ({
    onDelete() {
      dispatch(actions.removeUser(id));
    },
  }),
)(User);
