import { call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import * as actions from '../actions/actionsCreators';


const API_URL = 'http://localhost:8000/api/v1';

export const createUser = (url, data) => {
  console.log(data);
  
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "http://localhost:8000",
    },
    body: JSON.stringify({
      ...data
    })
  })
    .then( response => response.json() )
    .catch( error => error );
}


export function* postUser(action){
    const {firstName, lastName, username, password, email } = action.payload;
    const newUser = yield call(createUser, `${API_URL}/CreateUser/`, {firstName, lastName, username, password, email});
    yield put({
  type: "USER_ADDED_ASYNC",
  payload: {
    
    firstName,
    lastName,
    email,
    username,
  },
});
  
    
}