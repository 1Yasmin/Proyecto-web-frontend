import uuid from 'uuid-v4';
import validator from 'email-validator';
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset} from 'redux-form';

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

const UserForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      className="content"
      type="text"
      name="firstName"
      placeholder="Name:"
      component={renderInput}
    />
    <Field
      className="content"
      type="text"
      name="lastName"
      placeholder="Last name:"
      component={renderInput}
    />
    <Field
      className="content"
      type="text"
      name="username"
      placeholder="Username:"
      component={renderInput}
    />
    <Field
      className="content"
      type="email"
      name="email"
      placeholder="Email:"
      component={renderInput}
    />
    <Field
      className="content"
      type="password"
      name="password"
      placeholder="Password:"
      component={renderInput}
    />
    <button type="submit" className="loginBtn">
      Agregar!
    </button>
  </form>
);


export default reduxForm({
  form: 'createUserForm',
  onSubmit(values, dispatch) {
    console.log(uuid())
    dispatch(actions.addUser(
      uuid(),
      values.firstName,
      values.lastName,
      values.email,
      values.password,
      values.username,
    ));
    
  },
  validate(values) {
    const errors = {};
    if(!values.password){
      errors.password = "Password is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else {
      if (!validator.validate(values.email)) {
        errors.email = "Email is invalid!";
      }
    }

    return errors;
  }
})(UserForm);

