import uuid from 'uuid-v4';
import validator from 'email-validator';
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../../actions/actionCreators';


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
  <form action="http://localhost:3000/home">
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
  onSubmit(values, dispatch) {
    console.log(uuid())
    dispatch(actions.addUser(
      uuid(),
      values.username,
      values.password,
    ));
  },
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