import { AnyAction, ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { Application } from "../models/application";
import { ApplicationSubmission } from "../models/application-submission";
import { HttpClient } from "../utils/http-client";

//Action Types
export const CLEAR_APPLICATION = "CLEAR_APPLICATION";
export const FETCH_APPLICATION_FAILURE = "FETCH_APPLICATION_FAILURE";
export const FETCH_APPLICATION_REQUEST = "FETCH_APPLICATION_REQUEST";
export const FETCH_APPLICATION_SUCCESS = "FETCH_APPLICATION_SUCCESS";
export const SUBMIT_APPLICATION_SUCCESS = "SUBMIT_APPLICATION_SUCCESS";

//Action Creator
export const clearApplication = () => {
  return {
    type: CLEAR_APPLICATION
  };
};

export const fetchApplicationRequest: ActionCreator<AnyAction> = () => {
  return {
    type: FETCH_APPLICATION_REQUEST
  };
};

export const fetchApplicationSuccess: ActionCreator<AnyAction> = (
  application: Application
) => {
  return {
    type: FETCH_APPLICATION_SUCCESS,
    payload: application
  };
};

export const fetchApplicationFailure: ActionCreator<AnyAction> = () => {
  return {
    type: FETCH_APPLICATION_FAILURE
  };
};

export const submitApplicationSuccess: ActionCreator<AnyAction> = () => {
  return {
    type: SUBMIT_APPLICATION_SUCCESS
  };
};

// Actions
export const fetchApplication: ActionCreator<
  ThunkAction<Promise<AnyAction>, {}, {}, AnyAction>
> = (applicationId: string, withFields: boolean) => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: any
  ): Promise<AnyAction> => {
    try {
      dispatch(fetchApplicationRequest());
      const queryParams = withFields
        ? "?withFields=true"
        : "?withApplicants=true";
      const application: Application = await new HttpClient().get(
        `applications/${applicationId}/${queryParams}`
      );
      return dispatch(fetchApplicationSuccess(application));
    } catch (e) {
      return dispatch(fetchApplicationFailure());
    }
  };
};

export const submitApplication: ActionCreator<
  ThunkAction<Promise<AnyAction>, {}, {}, AnyAction>
> = (applicationSubmission: ApplicationSubmission) => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: any
  ): Promise<AnyAction> => {
    try {
      await new HttpClient().post(
        `application-submissions`,
        applicationSubmission
      );

      return dispatch(submitApplicationSuccess());
    } catch (e) {
      return dispatch(fetchApplicationFailure());
    }
  };
};
