import uuid from 'uuid-v4';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
//import './loginForm.css'

import * as actions from '../../actions/actionsCreators';
import './styles.css';

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
    <button type="submit" className ="loginBtn">
      Login
    </button>
  </form>
);


export default reduxForm({
  form: 'loginUserForm',
   onSubmit(values, dispatch) {
    dispatch(actions.loginStarted(
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