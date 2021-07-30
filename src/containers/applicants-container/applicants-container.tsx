import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchApplicantPdfUrl } from "../../actions/applicant";
import { clearApplication, fetchApplication } from "../../actions/application";
import { Hyperlink } from "../../atoms/hyperlink";
import { Application } from "../../models/application";
import { ApplicationApplicant } from "../../models/application-applicant";
import { IState } from "../../store/initial-state";

export interface IApplicantsContainer {
  applicationId?: string;
}

export const ApplicantsContainer = ({
  applicationId
}: IApplicantsContainer): JSX.Element => {
  const application: Application = useSelector(
    (state: IState) => state.application
  );

  const dispatch = useDispatch();
  const downLoadApplicantPdf = async (applicantId: string) =>
    dispatch(fetchApplicantPdfUrl(applicantId));
  const loadApplication = async () => dispatch(fetchApplication(applicationId));
  const unloadApplication = async () => dispatch(clearApplication());

  useEffect(() => {
    loadApplication();

    return () => {
      unloadApplication();
    };
  }, [dispatch]);

  return (
    <div>
      <h1>Applicants Page</h1>
      <p>
        <Hyperlink title="Back to Tenant Page" href="/manager" />
      </p>
      <p>Application Id: {application?.applicationId}</p>
      <p>Application Name: {application?.applicationName}</p>
      {application?.applicants?.map(
        (applicationApplicant: ApplicationApplicant) => (
          <p
            key={applicationApplicant.applicantId}
            onClick={() =>
              fetchApplicantPdfUrl(applicationApplicant.applicantId)
            }
          >
            {applicationApplicant.applicantName}
          </p>
        )
      )}
    </div>
  );
};
