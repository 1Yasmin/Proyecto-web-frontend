import jwt_decode from 'jwt-decode';
import isPromise from 'is-promise';

import { call, put, takeEvery } from 'redux-saga/effects'

import * as actions from './actions/actionCreators';
import * as types from './types';


export const genLoginSaga = (apiLogin, getToken, getDecoded) => {
  const login = function* (action) {
    const { payload } = action;
    try {
      const result = yield call(
        apiLogin,
        payload.username,
        payload.password
      );

      const token = getToken(result);
      const decoded = getDecoded(jwt_decode, result, payload);

      yield put(
        actions.completeLogin(
          token,
          decoded,
          payload
        )
      );
    } catch (error) {

      yield put(actions.failLogin({
        ...error,
        retryAction: action
      }));
    }
  }

  const watchLogin = function* () {
    yield takeEvery(types.LOGIN_STARTED, login);
  }

  return watchLogin;
}