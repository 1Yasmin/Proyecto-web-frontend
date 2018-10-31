//imports de librerias
import React from 'react';
//imports de archivos del proyecto
import LoginForm from '../components/LoginForm';

export default function Loginpage(props){
  return <div>
    <h2>Login</h2>
    <LoginForm />
    
    <form action="http://localhost:3000/signup">
    <input type="submit" value="Create Account" />
    </form>
    </div>
}