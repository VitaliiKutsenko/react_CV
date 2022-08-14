import { GET_COURSES, GET_COURSES_SUCCESS, GET_COURSES_DENIED } from './coursesActionTypes';

export const getCoursesAction = payload => ({
  type: GET_COURSES,
  payload,
});
export const coursesDataSuccessAction = payload => ({
  type: GET_COURSES_SUCCESS,
  payload,
});
export const coursesDataErrorAction = payload => ({
  type: GET_COURSES_DENIED,
  payload,
});
