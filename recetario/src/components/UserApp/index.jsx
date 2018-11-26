import React from 'react';
import UserForm from '../UserForm';


const UserApp = () => (
  <div className="usersApp">
    <h2>
      { 'Nuevo usuario:' }
    </h2>
    <UserForm />
  </div>
);

export default UserApp;