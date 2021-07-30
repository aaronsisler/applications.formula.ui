import { AnyAction, ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { HttpClient } from "../utils/http-client";

//Action Types
export const CLEAR_APPLICANT = "CLEAR_APPLICANT";
export const FETCH_APPLICANT_PDF_URL_SUCCESS =
  "FETCH_APPLICANT_PDF_URL_SUCCESS";
export const FETCH_APPLICANT_PDF_URL_FAILURE =
  "FETCH_APPLICANT_PDF_URL_FAILURE";

//Action Creator
export const clearApplicant = () => {
  return {
    type: CLEAR_APPLICANT
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

export const fetchApplicantPdfUrlFailure: ActionCreator<AnyAction> = () => {
  return {
    type: FETCH_APPLICANT_PDF_URL_FAILURE
  };
};

// Actions
export const fetchApplicantPdfUrl: ActionCreator<
  ThunkAction<Promise<AnyAction>, {}, {}, AnyAction>
> = (applicantId: string) => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: any
  ): Promise<AnyAction> => {
    try {
      const applicantPdfUrl: string = await new HttpClient().get(
        `applicant/${applicantId}`
      );
      return dispatch(fetchApplicantPdfUrlSuccess(applicantPdfUrl));
    } catch (e) {
      return dispatch(fetchApplicantPdfUrlFailure());
    }
  };
};
