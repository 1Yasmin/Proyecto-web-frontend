import { createStore } from 'redux';

//import root reducer
import Rootreducer from '../reducers/index';

const store = createStore(Rootreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;