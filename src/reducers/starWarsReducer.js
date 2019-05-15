import /* we need our action types here*/{ FETCHING, SUCCESS, FAILURE } from "../actions";


const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  isFetching: false,
  error: null
};


export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING: 
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case SUCCESS: 
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        isFetching: false,
        error: ''
      }
    case FAILURE: 
      return {
      ...state,
      error: action.payload,
      isFetching: false
      }
    default:
      return state;
  }
};
