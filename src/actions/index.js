import axios from 'axios';

const TROVE_API_KEY = 'q8db8806ufklvrfj';
const TROVE_ROOT_URL = `http://api.trove.nla.gov.au/result?key=${TROVE_API_KEY}&zone=newspaper`;
export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const CREATE_POST = 'create_post';

export function fetchArticle(name) {
  console.log('name', name);
  const url = `${TROVE_ROOT_URL}&q=${name}&encoding=json`;
  console.log(url);
  const request = axios.get(url);
  console.log('Request:', request);
  return {
    type: FETCH_ARTICLE,
    payload: request
  };
}

export const FETCH_POSTS = 'fetch_posts';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP54321';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);
  return {
    type: CREATE_POST,
    payload: request
  };
}
