import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearApplication, fetchApplication } from "../../actions/application";
import { Hyperlink } from "../../atoms/hyperlink";
import { ApplyForm } from "../../components/apply-form";
import { Loading } from "../../components/loading";
import { ApplicationState, AppState } from "../../store";

export interface IApplyContainer {
  applicationId?: string;
}

export const ApplyContainer = ({
  applicationId
}: IApplyContainer): JSX.Element => {
  const { isLoading, hasSubmitted }: ApplicationState = useSelector(
    (state: AppState) => state.application
  );

  const dispatch = useDispatch();
  const loadApplication = async () =>
    dispatch(fetchApplication(applicationId, true));
  const unloadApplication = async () => dispatch(clearApplication());

  useEffect(() => {
    loadApplication();

    return () => {
      unloadApplication();
    };
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (hasSubmitted) {
    return (
      <div className="px-4 py-16 text-center grid gap-3">
        <p>Your application has been submitted.</p>
        <p>We will contact you about your application shortly.</p>
      </div>
    );
  }

  return <ApplyForm />;
};
