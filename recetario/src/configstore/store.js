import { createStore, applyMiddleware, compose  } from 'redux';
import createSagaMiddleware from 'redux-saga';
//import root reducer
import Rootreducer from '../reducers/index';

import thunk from "redux-thunk";
//import sagas
//import Saga from './Sagas';
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(thunk);

const store = createStore(Rootreducer,compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

//sagaMiddleware.run(Saga);

export default store;