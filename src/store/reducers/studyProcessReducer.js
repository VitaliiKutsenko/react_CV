import {
  GET_STUDY_PROCESS_SUCCESS,
  GET_STUDY_PROCESS_DENIED,
  CLEAR_STUDY_PROCESS,
} from '../actions/studyProcess/studyProcessActionTypes';

const initialState = {
  studyProcess: null,
  error: null,
  hasError: null,
};

export const studyProcess = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_STUDY_PROCESS_SUCCESS:
      return {
        error: null,
        studyProcess: { ...payload.data },
        hasError: payload.hasError,
      };

    case GET_STUDY_PROCESS_DENIED:
      return {
        studyProcess: null,
        error: {
          ...state.error,
          ...payload,
        },
        hasError: payload.hasError,
      };

    case CLEAR_STUDY_PROCESS: {
      return {
        error: null,
        studyProcess: null,
        hasError: null,
      };
    }

    default:
      return state;
  }
};
