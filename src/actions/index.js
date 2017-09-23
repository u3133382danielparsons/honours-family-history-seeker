import axios from 'axios';

const TROVE_API_KEY = 'q8db8806ufklvrfj';
const TROVE_ROOT_URL = `http://api.trove.nla.gov.au/result?key=${TROVE_API_KEY}&zone=newspaper`;
export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const CREATE_POST = 'create_post';
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyDOSKJMms3-EdO9mFv2t4-nkKcXYggXK3s';

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
const POST_API_KEY = '?key=PAPERCLIP54321';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${POST_API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values) {
  const request = axios.post(`${ROOT_URL}/posts${POST_API_KEY}`, values);
  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchTube(term) {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video'
  };

  const request = axios.get(YOUTUBE_URL, { params: params });

  return {
    type: 'fetch',
    payload: request
  };
}
