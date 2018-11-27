//imports de librerias
import React from 'react';

//imports de archivos del proyecto
import UserApp from '../components/UserApp';

export default function Signinpage(props){
  return <div>
      <UserApp />
      <form action="http://localhost:3000/">
        <input type="submit" value="Regresar" />
      </form>
    </div>
}