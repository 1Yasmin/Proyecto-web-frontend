import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/actionsCreators';
import Categoria from '../Categoria';


const CategoriaList = ({ categoriaIds }) => (
    <ul>
      { categoriaIds.map(id => <Categoria key={id} id={id} />) }
    </ul>
   
);


export default connect(
  state => ({
    categoriaIds: selectors.getCategoriaIds(state),
  }),
  undefined,
)(CategoriaList);