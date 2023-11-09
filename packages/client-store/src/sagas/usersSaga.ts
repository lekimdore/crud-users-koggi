import { all, call, put, takeEvery } from 'redux-saga/effects';
import { UsersApi } from '@shared/client-api';
import { PayloadAction } from '@reduxjs/toolkit';
import { createUser } from '../slices/usersSlice';

interface NewUser {
  name: string;
  email: string;
  image?: string;
}

function* createUserSaga(action: PayloadAction<NewUser>) {
  try {
    const data = yield call(() => UsersApi.createUser(action.payload));
  } catch (error) {
    console.error(error);
  }
}

function* usersSaga(): Generator {
  yield all([takeEvery(createUser, createUserSaga)]);
}

export default usersSaga;
