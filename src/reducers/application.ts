import { AnyAction } from "redux";

import {
  CLEAR_APPLICATION,
  FETCH_APPLICATION_REQUEST,
  FETCH_APPLICATION_SUCCESS,
  SUBMIT_APPLICATION_REQUEST,
  SUBMIT_APPLICATION_SUCCESS
} from "../actions/application";
import { Application } from "../models/application";
import { ApplicationApplicant } from "../models/application-applicant";
import { ApplicationField } from "../models/application-field";
import { ApplicationState } from "../store";

export const applicationInitialState: ApplicationState = {
  isLoading: true,
  isSubmitting: false,
  hasSubmitted: false,
  data: null!
};

const applicationReducer = (
  state: ApplicationState = applicationInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case CLEAR_APPLICATION:
      return applicationInitialState;
    case SUBMIT_APPLICATION_REQUEST:
      return { ...state, isSubmitting: true };
    case SUBMIT_APPLICATION_SUCCESS:
      return { ...state, isSubmitting: false, hasSubmitted: true, data: null };
    case FETCH_APPLICATION_REQUEST:
      return { ...state, isLoading: true, data: null };
    case FETCH_APPLICATION_SUCCESS:
      const rawApplication: Application = action.payload;
      rawApplication.applicants?.sort(
        (a: ApplicationApplicant, b: ApplicationApplicant) =>
          a.dateSubmitted >= b.dateSubmitted ? -1 : 1
      );
      rawApplication.applicationFields?.sort(
        (a: ApplicationField, b: ApplicationField) =>
          a.applicationSequence >= b.applicationSequence ? 1 : -1
      );
      return { ...state, isLoading: false, data: rawApplication };
    default:
      return state;
  }
};

export default applicationReducer;
