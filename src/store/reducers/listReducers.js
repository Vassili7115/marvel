import * as types from "../actions/typesActions";

const initialState = {
    loading: false,
    characters: null,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PENDING:
            return {
                ...state,
                loading: true};
        case types.FETCH_SUCCESSED:
            return {
                ...state,
                loading: false,
                characters: action.payload.results };
        case types.FETCH_ERROR:
            return {
                ...state,
                error:action.payload};
        default:
            return state;
    }
}
