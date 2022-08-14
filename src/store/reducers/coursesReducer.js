import { GET_COURSES_DENIED, GET_COURSES_SUCCESS } from '../actions/courses/coursesActionTypes';

const initialState = {
  courses: null,
  error: null,
  availableCourses: null,
  archive: null,
  hasError: null,
};

export const courses = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COURSES_SUCCESS:
      return {
        error: null,
        courses: [...payload.data],
        availableCourses: payload.data.filter(course => course.status !== 'Ended'),
        archiveCourses: payload.data.filter(course => course.status === 'Ended'),
        hasError: payload.hasError,
      };

    case GET_COURSES_DENIED:
      return {
        courses: null,
        error: {
          ...state.error,
          ...payload,
        },
        hasError: payload.hasError,
      };

    default:
      return state;
  }
};
