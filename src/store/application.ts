import { Application } from "../models/application";

export interface ApplicationState {
  isLoading: boolean;
  data?: Application;
}
