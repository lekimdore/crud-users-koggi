import { all, fork } from 'redux-saga/effects';
import usersSaga from './usersSaga';

function* rootSaga(): Generator {
  yield all([fork(usersSaga)]);
}

export default rootSaga;
