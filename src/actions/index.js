import axios from 'axios';

// src/components/search/SearchMain.js
const TROVE_API_KEY = 'q8db8806ufklvrfj';
const TROVE_ROOT_URL = `http://api.trove.nla.gov.au/result?key=${TROVE_API_KEY}&zone=newspaper`;

// src/components/SearchForm.js
export function fetchArticle(name) {
  console.log('name = ', name);
  const url = `${TROVE_ROOT_URL}&q=${name}&encoding=json&reclevel=full`;
  console.log('url = ', url);
  const request = axios.get(url);
  console.log('Request:', request);
  return {
    type: FETCH_ARTICLE,
    payload: request
  };
}

// src/components/PostsMain.js
export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const CREATE_POST = 'create_post';
export const FETCH_POSTS = 'fetch_posts';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const POST_API_KEY = '?key=DANIEL3133382';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${POST_API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

// src/components/add-posts/AddPostsMain.js
export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${POST_API_KEY}`, values)
    .then(() => callback());
  // alert(
  //   'Pending verification the article will be published in the POSTS page!'
  // );
  return {
    type: CREATE_POST,
    payload: request
  };
}

// src/components/videos/VideosMain.js
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyDOSKJMms3-EdO9mFv2t4-nkKcXYggXK3s';
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
