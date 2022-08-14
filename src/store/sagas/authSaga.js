import { put, takeEvery, call } from 'redux-saga/effects';
import { auth } from '../../api/auth';
import { AUTH_SUBMIT_FIELDS } from '../actions/auth/authActionTypes';
import { getAuthErrorAction, getAuthSuccessAction } from '../actions/auth/authActions';

export function* authSaga({ payload }) {
  const { data, hasError } = yield call(auth, payload);

  if (hasError) {
    yield put(getAuthErrorAction({ ...data }));
  } else {
    const token = data.data;

    yield put(getAuthSuccessAction({ ...data }));

    localStorage.setItem('access_token', token);
  }
}

export function* authWatcher() {
  yield takeEvery(AUTH_SUBMIT_FIELDS, authSaga);
}
