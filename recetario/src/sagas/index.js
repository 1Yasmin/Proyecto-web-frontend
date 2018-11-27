import { takeEvery } from 'redux-saga/effects';

import * as types from '../types';
import { postUser, login } from './users'; 


function* Saga() {
    yield takeEvery(types.USER_ADDED, postUser); // crear usuarios
    yield takeEvery(types.LOGIN_STARTED, login); // crear login
}

export default Saga;