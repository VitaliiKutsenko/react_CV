import { combineReducers } from 'redux';
import { auth } from './authReducer';
import { resetPassword } from './resetPasswordReducer';
import { courses } from './coursesReducer';
import { studyProcess } from './studyProcessReducer';

export const reducer = combineReducers({
  auth,
  courses,
  resetPassword,
  studyProcess,
});
