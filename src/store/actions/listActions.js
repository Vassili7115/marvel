import { FETCH_PENDING, FETCH_SUCCESSED, FETCH_ERROR } from "./typesActions";
import md5 from 'md5';


//import des constant (api keys)
import { API_PUBLIC_KEY, API_PRIVATE_KEY } from '../../constant/apiKey'

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
  const hash = md5(ts + API_PRIVATE_KEY + API_PUBLIC_KEY);
  const options = `characters`;
  const limit = 20;
  const url = `https://gateway.marvel.com/v1/public/${options}?apikey=${API_PUBLIC_KEY}&hash=${hash}&ts=${ts}&limit=${limit}`;
  disptach(getListPending());
  fetch(url)
    .then(res => res.json())
    .then(data => disptach(getListSuccessed(data.data)))
    .catch(err => disptach(getListError(err)));
};
