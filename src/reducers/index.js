import { responsiveStateReducer } from 'redux-responsive';
import { combineReducers } from 'redux';
import { responsiveDrawer } from '../material-ui-responsive-drawer';
import articles from './articles.js';
import articlesTwo from './articlesTwo.js';

const reducers = combineReducers({
  browser: responsiveStateReducer,
  responsiveDrawer: responsiveDrawer,
  articles,
  articlesTwo
});

export default reducers;
