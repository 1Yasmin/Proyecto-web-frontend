import React from 'react';
export default function Loginpage(props){
  return <div>
    <h2>Login</h2>
    <form action="http://localhost:3000/home">
    <input type="submit" value="Log In" />
    </form>
    <form action="http://localhost:3000/signup">
    <input type="submit" value="Create Account" />
    </form>
    </div>
}