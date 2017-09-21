import { combineReducers } from 'redux';
import auth from './reducers/auth';
import common from './reducers/common';
import home from './reducers/home';
import profile from './reducers/profile';
import settings from './reducers/settings';

export default combineReducers({
  auth,
  common,
  home,
  profile,
  settings
});
