import * as types from '../types';

export const token = (state = "", { type, payload }) => {
  switch(type) {
    case types.LOGIN_SUCCEED:
      return payload.token;
    case types.LOGOUT:
    case types.LOGIN_FAILED:
      return "";
    default:
      return state;
  }
}

export const decoded = (state = {}, { type, payload }) => {
  switch(type) {
    case types.LOGIN_SUCCEED:
      return payload.decoded;
    case types.LOGOUT:
    case types.LOGIN_FAILED:
      return {};
    default:
      return state;
  }
}

export const error = (state = {}, { type, payload }) => {
  switch(type) {
    case types.LOGIN_STARTED:
    case types.LOGIN_SUCCEED:
    case types.LOGOUT:
      return {};
    case types.LOGIN_FAILED:
      return payload;
    default:
      return state;
  }
}

export const getToken = state => state.token;
export const getIsAuth = state => getToken(state).length > 0;
export const getDecoded = state => state.decoded;
export const getError = state => state.error;