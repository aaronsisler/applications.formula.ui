import { Application } from "../models/application";

export interface ApplicationState {
  isLoading: boolean;
  isSubmitting: boolean;
  hasSubmitted: boolean;
  data?: Application;
}
