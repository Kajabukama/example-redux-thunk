import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

const reducer = combineReducers({
  users: userReducer,
});

export default reducer;