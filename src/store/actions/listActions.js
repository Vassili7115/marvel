/* global fetch:false */

import md5 from 'md5';
import { FETCH_PENDING, FETCH_SUCCESSED, FETCH_ERROR } from './typesActions';

// import des constant
import { API_PUBLIC_KEY, API_PRIVATE_KEY } from '../../constant/apiKey';

const getListPending = () => ({ type: FETCH_PENDING, payload: true });

const getListSuccessed = data => ({ type: FETCH_SUCCESSED, payload: data });

const getListError = error => ({ type: FETCH_ERROR, payload: error });

export const getList = option => (disptach) => {
  const ts = Date.now();
  const hash = md5(ts + API_PRIVATE_KEY + API_PUBLIC_KEY);
  const limit = 40;
  const url = `https://gateway.marvel.com/v1/public/${option}?apikey=${API_PUBLIC_KEY}&hash=${hash}&ts=${ts}&limit=${limit}`;
  disptach(getListPending());
  fetch(url)
    .then(res => res.json())
    .then(data => disptach(getListSuccessed(data.data)))
    .catch(err => disptach(getListError(err)));
};

export default 'getList';


// export const getListComics = () => disptach => {
//   const ts = Date.now();
//   const hash = md5(ts + API_PRIVATE_KEY + API_PUBLIC_KEY);
//   const option = 'comics' ;
//   const limit = 40;
//   const url = `https://gateway.marvel.com/v1/public/${option}?apikey=${API_PUBLIC_KEY}&hash=${hash}&ts=${ts}&limit=${limit}`;
//   disptach(getListPending());
//   fetch(url)
//     .then(res => res.json())
//     .then(data => disptach(getListSuccessed(data.data)))
//     .catch(err => disptach(getListError(err)));
// };
