//imports de librerias
import React from 'react';
//imports de archivos del proyecto
import LoginForm from '../components/LoginForm';
import './loginpagestyles.css';
import '../components/LoginForm/styles.css';


export default function Loginpage(props){
  return <div>
      <h2>Login</h2>
      <LoginForm className="container"/>
      <form className="crearBtn" action="http://localhost:3000/signup">
        <input className='loginBtn' type="submit" value="Crear cuenta" />
      </form>
    </div>
}