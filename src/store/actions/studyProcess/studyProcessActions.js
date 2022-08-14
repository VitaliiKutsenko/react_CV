import {
  GET_STUDY_PROCESS,
  GET_STUDY_PROCESS_SUCCESS,
  GET_STUDY_PROCESS_DENIED,
  CLEAR_STUDY_PROCESS,
} from './studyProcessActionTypes';

export const getStudyProcessId = payload => ({
  type: GET_STUDY_PROCESS,
  payload,
});

export const clearStudyProcessStore = () => ({ type: CLEAR_STUDY_PROCESS });

export const getStudyProcessDataSuccess = payload => ({
  type: GET_STUDY_PROCESS_SUCCESS,
  payload,
});

export const getStudyProcessDataError = payload => ({
  type: GET_STUDY_PROCESS_DENIED,
  payload,
});
