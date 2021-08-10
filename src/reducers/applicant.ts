import { AnyAction } from "redux";

import {
  CLEAR_APPLICANT,
  FETCH_APPLICANT_PDF_URL_REQUEST,
  FETCH_APPLICANT_PDF_URL_SUCCESS
} from "../actions/applicant";
import { ApplicantState } from "../store";

export const applicantInitialState: ApplicantState = {
  isLoading: false,
  applicantId: undefined,
  applicantPdfSignedUrl: undefined
};

const applicantReducer = (
  state: ApplicantState = applicantInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case CLEAR_APPLICANT:
      return applicantInitialState;
    case FETCH_APPLICANT_PDF_URL_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_APPLICANT_PDF_URL_SUCCESS:
      return {
        ...state,
        applicantPdfSignedUrl: action.payload
      };
    default:
      return state;
  }
};

export default applicantReducer;
