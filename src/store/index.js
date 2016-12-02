import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
// import { composeWithDevTools } from 'redux-devtools-extension';

let store = {};
const initializeStore = (initialState) => {
  store = createStore(
    rootReducer, initialState,
    applyMiddleware(thunkMiddleware));

  return store;
};

const get = () => store;

export default {
  initializeStore,
  get
};
