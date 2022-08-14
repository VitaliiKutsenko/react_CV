import { put, takeEvery, call } from 'redux-saga/effects';
import { coursesDataErrorAction, coursesDataSuccessAction } from '../actions/courses/coursesActions';
import { GET_COURSES } from '../actions/courses/coursesActionTypes';
import { getMappedCourses } from '../../services/coursesServices';

export function* coursesSaga() {
  const { data, hasError } = yield call(getMappedCourses);

  if (hasError) {
    yield put(
      coursesDataErrorAction({
        data,
        hasError,
      })
    );
  } else {
    yield put(
      coursesDataSuccessAction({
        data,
        hasError,
      })
    );
  }
}

export function* getCoursesWatcher() {
  yield takeEvery(GET_COURSES, coursesSaga);
}
