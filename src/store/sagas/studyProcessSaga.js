import { put, takeEvery, call } from 'redux-saga/effects';
import { getStudyProcessDataError, getStudyProcessDataSuccess } from '../actions/studyProcess/studyProcessActions';
import { GET_STUDY_PROCESS } from '../actions/studyProcess/studyProcessActionTypes';
import { getMappedStudyProcess } from '../../services/studyPageServices';

export function* studyProcessSaga({ payload }) {
  const { data, hasError } = yield call(() => getMappedStudyProcess(payload));

  if (hasError) {
    yield put(
      getStudyProcessDataError({
        data,
        hasError,
      })
    );
  } else {
    yield put(
      getStudyProcessDataSuccess({
        data,
        hasError,
      })
    );
  }
}

export function* getStudyProcessWatcher() {
  yield takeEvery(GET_STUDY_PROCESS, studyProcessSaga);
}
