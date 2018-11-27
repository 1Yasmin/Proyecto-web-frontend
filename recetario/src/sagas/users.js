import { call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import {startSubmit, stopSubmit} from 'redux-form';
import * as actions from '../actions/actionsCreators';


const API_URL = 'http://localhost:8000/api/v1';

export const postData = (url, data) => {
  console.log(data);
  
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*",
    },
    body: JSON.stringify({
      ...data
    })
  })
    .then( response => response.json() )
    .catch( error => error );
}


export function* postUser(action){
    yield put(startSubmit('createUserForm'));
    let errors = {};
    const {first_name, last_name, username, password, email } = action.payload;
    const newUser = yield call(postData, `${API_URL}/CreateUser/`, {first_name, last_name, username, password, email});
    if(Object.keys(newUser).length == 1){
     yield put({type: 'REQUEST_FAILED', errors: newUser.username});
      errors = newUser.username;
      alert(newUser.username)
    }else{ 
      alert("¡creación exitosa!")
    }
    yield put(stopSubmit('createUserForm', errors));
  
    
}