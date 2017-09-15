import axios from 'axios';

const API_KEY = 'q8db8806ufklvrfj';
const ROOT_URL = `http://api.trove.nla.gov.au/result?key=${API_KEY}&zone=newspaper`;

export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const FAVOURITE_ARTICLE = 'FAVOURITE_ARTICLE';

export function fetchArticle(name) {
  console.log('name', name);
  const url = `${ROOT_URL}&q=${name}&encoding=json`;
  console.log(url);
  const request = axios.get(url);
  console.log('Request:', request);
  return {
    type: FETCH_ARTICLE,
    payload: request
  };
}
