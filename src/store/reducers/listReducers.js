import * as types from '../actions/typesActions';

const initialState = {
  loading: true,
  characters: null,
  offset: null,
  limit: null,
  total: null,
  comics: null,
  series: null,
  error: null,
};

export default (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case types.FETCH_PENDING:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SUCCESSED:
      return {
        ...state,
        loading: false,
        characters: action.payload.results,
        comics: action.payload.results,
        series: action.payload.results,
        offset: action.payload.offset,
        limit: action.payload.limit,
        total: action.payload.total,
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
