import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

const store = applyMiddleware(promise)(createStore);

export default store;
