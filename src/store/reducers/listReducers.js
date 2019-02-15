import * as types from '../actions/typesActions';

const initialState = {
  loading: false,
  characters: null,
  comics: null,
  series: null,
  error: null,
};

export default (state = initialState, action) => {
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
        // characters: {
        //   results: action.payload.results,
        //   current: action.payload.results,
        //   nbElement: action.payload.results,
        //   nbTotalElement: action.payload.results,
        // },
        comics: action.payload.results,
        series: action.payload.results,
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
