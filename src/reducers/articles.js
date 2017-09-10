import { FETCH_ARTICLE } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ARTICLE:
      return [action.payload.data, ...state];
    default:
  }
  console.log('Action received', action);
  return state;
}
