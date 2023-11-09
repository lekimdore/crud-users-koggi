import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import users from './usersSlice';

const rootReducer = combineReducers({
  users,
});

const createRootReducer = (
  state: ReturnType<typeof rootReducer> | undefined,
  action: AnyAction
) => {
  return rootReducer(state, action);
};

export default createRootReducer;
