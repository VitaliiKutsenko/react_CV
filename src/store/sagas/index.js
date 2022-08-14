import { all } from 'redux-saga/effects';
import { resetPasswordWatcher } from './resetPasswordSaga';
import { authWatcher } from './authSaga';
import { getCoursesWatcher } from './coursesSaga';
import { getStudyProcessWatcher } from './studyProcessSaga';

export function* rootSaga() {
  yield all([resetPasswordWatcher(), authWatcher(), getCoursesWatcher(), getStudyProcessWatcher()]);
}
