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

//cambiar a onSubmit en vez de action cuando se tenga verificacion
const LoginForm = ({ handleSubmit }) => (
  <form className="btnHome" onSubmit={handleSubmit}>
    <Field
      type="text"
      name="username"
      placeholder="Username:"
      component={renderInput}
    />
    <Field
      type="password"
      name="password"
      placeholder="Password:"
      component={renderInput}
    />
    <button type="submit" >
      Login
    </button>
  </form>
);


export default reduxForm({
  form: 'loginUserForm',
  validate(values) {
    const errors = {};
    if(!values.password){
      errors.password = "Incorrect password";
    }
    if (!values.username) {
      errors.username = "Incorrect username";
    } 
    return errors;
  }
})(LoginForm);