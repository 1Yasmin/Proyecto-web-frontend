//imports de librerias
import React from 'react';
import uuid from 'uuid-v4';
import validator from 'email-validator';
import { Field, reduxForm } from 'redux-form';
//imports de archivos del proyecto
import * as actions from '../actions/actionCreators';
import UserApp from '../components/UserApp';

export default function Signinpage(props){
  return <div>
    <h2>Create Account</h2>
    <UserApp />
    <form action="http://localhost:3000/">
    <input type="submit" value="Return" />
    </form>
    </div>
}