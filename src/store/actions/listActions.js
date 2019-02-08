// import * as types from "./types";
import md5 from 'md5';

export const FETCH_PENDING = "FETCH_PENDING";
export const FETCH_SUCCESSED = "FETCH_SUCCESSED";
export const FETCH_ERROR = "FETCH_ERROR";

const getListPending = () => {
  return {
    type: FETCH_PENDING,
    payload: true
  };
};
const getListSuccessed = data => {
  return {
    type: FETCH_SUCCESSED,
    payload: data
  };
};

const getListError = error => {
  return {
    type: FETCH_ERROR,
    payload: error
  };
};

export const getList = () => disptach => {
  const ts = Date.now();
  const hash = md5(ts + process.env.REACT_APP_API_PRIVATE_KEY + process.env.REACT_APP_API_PUBLIC_KEY);
  const options = `characters`;
  const url = `https://gateway.marvel.com/v1/public/${options}?apikey=${process.env.REACT_APP_API_PUBLIC_KEY}&hash=${hash}&ts=${ts}`;
  disptach(getListPending());
  fetch(url)
    .then(res => res.json())
    .then(data => disptach(getListSuccessed(data.data)))
    .catch(err => disptach(getListError(err)));
};
