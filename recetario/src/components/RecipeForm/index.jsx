import uuid from 'uuid-v4';
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../../actions/actionsCreators';
import '../LoginForm/styles.css';

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

const RecipeForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      className="content"
      type="text"
      name="titulo"
      placeholder="Titulo:"
      component={renderInput}
    />
     <Field
      className="content"
      type="text"
      name="ingredientes"
      placeholder="Ingredientes:"
      component={renderInput}
    />
    <Field
      className="content"
      type="text"
      name="descripcion"
      placeholder="Descripcion:"
      component={renderInput}
    />
    <Field
      className="content"
      type="text"
      name="categoria"
      placeholder="Categoria:"
      component={renderInput}
    />
    <button type="submit" className ="loginBtn">
      Agregar receta
    </button>
  </form>
);


export default reduxForm({
  form: 'createRecipeForm',
  onSubmit(values, dispatch) {
    console.log(uuid())
    dispatch(actions.addRecipe(
      uuid(),
      values.titulo,
      values.ingredientes,
      values.descripcion,
      values.categoria,
    ));
  },
  
})(RecipeForm);

