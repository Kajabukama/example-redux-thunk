import axios from 'axios';
import { 
  FETCH_USERS_REQUEST, 
  FETCH_USERS_SUCCESS, 
  FETCH_USERS_FAILURE 
} from './user.types';


export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
    info: 'Fetch users request'
  }
}

export const fetchUsersSuccess = (user) => {
  return {
    type: FETCH_USERS_SUCCESS,
    info: 'Fetch users success with users list',
    payload: user
  }
}

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    info: 'Fetch users failure with error message',
    payload: error
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users))
      }) 
      .catch((error) => {
        const message = error.errorMessage;
        dispatch(fetchUsersFailure(message));
      })
  }
}