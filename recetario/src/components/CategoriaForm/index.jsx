import uuid from 'uuid-v4';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
//import './loginForm.css'

import * as actions from '../../actions/actionsCreators';

const renderInput = ({ input, meta, ...props }) => (
  <div className="my-input">
    {
      meta.error && meta.touched && (
        <div className="error">
          { meta.error }
        </div>
      )
    }
    <input {...input} {...props} />
  </div>
);


const CategoriaForm = ({ handleSubmit }) => (
  <form className="CategoriaForm" onSubmit={handleSubmit}> 
    <Field
      className="content"
      type="text"
      name="nombre"
      placeholder="Categoria:"
      component={renderInput}
    />
    <button type="submit" className ="loginBtn">
      Crear Categoria
    </button>
  </form>
);


export default reduxForm({
  form: 'CategoriaForm',
   onSubmit(values, dispatch) {
    dispatch(actions.addCategoria(
      uuid(),
      values.nombre,
    ));   
  },
  
})(CategoriaForm);