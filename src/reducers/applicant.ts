import { AnyAction } from "redux";

import {
  CLEAR_APPLICANT,
  FETCH_APPLICANT_PDF_URL_SUCCESS
} from "../actions/applicant";
import { ApplicantState } from "../store";

export const applicantInitialState: ApplicantState = {
  applicantId: undefined,
  applicantPdfSignedUrl: undefined
};

const applicantReducer = (
  state: ApplicantState = applicantInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case CLEAR_APPLICANT:
      return null;
    case FETCH_APPLICANT_PDF_URL_SUCCESS:
      return { ...state, applicantPdfSignedUrl: action.payload };
    default:
      return state;
  }
};

export default applicantReducer;
