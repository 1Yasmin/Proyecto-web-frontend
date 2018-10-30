import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';

import RecetaList from './RecetaList';

function mapStateToProps(state){
  return{
    recetas: state.recetas
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators,dispatch);
}

const App = connect(mapStateToProps,mapDispatchToProps)(RecetaList);

export default App;