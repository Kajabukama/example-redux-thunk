import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './user.types';

const initialState = {
  loading: true,
  users: [],
  error: ''
}

const reducer = (state = initialState, action ) => {
  switch(action.type){
    case FETCH_USERS_REQUEST: return {
      ...state,
      loading: state.loading,
    }

    case FETCH_USERS_SUCCESS: return {
      ...state,
      loading: !state.loading,
      users: action.payload,
      error: ''
    }

    case FETCH_USERS_FAILURE: return {
      ...state,
      loading: !state.loading,
      users: [],
      error: action.payload
    }

    default: return state
  }
}

export default reducer;