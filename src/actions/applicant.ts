import { AnyAction, ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { HttpClient } from "../utils/http-client";

//Action Types
export const CLEAR_APPLICANT = "CLEAR_APPLICANT";
export const FETCH_APPLICANT_PDF_URL_FAILURE =
  "FETCH_APPLICANT_PDF_URL_FAILURE";
export const FETCH_APPLICANT_PDF_URL_REQUEST =
  "FETCH_APPLICANT_PDF_URL_REQUEST";
export const FETCH_APPLICANT_PDF_URL_SUCCESS =
  "FETCH_APPLICANT_PDF_URL_SUCCESS";

//Action Creator
export const clearApplicant = () => {
  return {
    type: CLEAR_APPLICANT
  };
};

export const fetchApplicantPdfUrlFailure: ActionCreator<AnyAction> = () => {
  return {
    type: FETCH_APPLICANT_PDF_URL_FAILURE
  };
};

export const fetchApplicantPdfUrlRequest: ActionCreator<AnyAction> = () => {
  return {
    type: FETCH_APPLICANT_PDF_URL_REQUEST
  };
};

export const fetchApplicantPdfUrlSuccess: ActionCreator<AnyAction> = (
  applicantPdfUrl: string
) => {
  return {
    type: FETCH_APPLICANT_PDF_URL_SUCCESS,
    payload: applicantPdfUrl
  };
};

// Actions
export const fetchApplicantPdfUrl: ActionCreator<
  ThunkAction<Promise<AnyAction>, {}, {}, AnyAction>
> = (applicantId: string) => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    _getState: any
  ): Promise<AnyAction> => {
    try {
      dispatch(fetchApplicantPdfUrlRequest());
      const applicantPdfUrl: string = await new HttpClient().get(
        `applicants/${applicantId}/pdf`
      );
      return dispatch(fetchApplicantPdfUrlSuccess(applicantPdfUrl));
    } catch (e) {
      return dispatch(fetchApplicantPdfUrlFailure());
    }
  };
};
