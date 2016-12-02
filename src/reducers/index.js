import {combineReducers} from 'redux';
import {login} from './authReducer';
import {app} from './appReducer';

const rootReducer = combineReducers({
  app,
  login  
});

export default rootReducer;
