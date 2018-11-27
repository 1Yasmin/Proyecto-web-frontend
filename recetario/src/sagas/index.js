import { takeEvery } from 'redux-saga/effects';

import * as types from '../types';
import { postUser } from './users'; 


function* Saga() {
    yield takeEvery(types.USER_ADDED, postUser);      // crear usuarios
}

export default Saga;