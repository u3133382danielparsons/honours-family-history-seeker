import { responsiveStateReducer } from 'redux-responsive';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { responsiveDrawer } from '../material-ui-responsive-drawer';
import articles from './articles.js';
import posts from './posts';

const reducers = combineReducers({
  browser: responsiveStateReducer,
  responsiveDrawer,
  form: formReducer,
  posts,
  articles
});

export default reducers;
