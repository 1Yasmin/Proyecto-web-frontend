import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import users, * as fromUsers from './users';


const Rootreducer = combineReducers({
  users,
  form: formReducer,
});

export default Rootreducer;

export const getUser = (state, id) =>
  fromUsers.getUser(state.users, id);
export const getUserIds = (state) => fromUsers.getUserIds(
  state.users,
);
export const getUsers = (state) =>
  fromUsers.getUsers(state.users);