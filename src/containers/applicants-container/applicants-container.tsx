import React, { useEffect } from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearApplicant, fetchApplicantPdfUrl } from "../../actions/applicant";
import { clearApplication, fetchApplication } from "../../actions/application";
import { Hyperlink } from "../../atoms/hyperlink";
import { Applicant } from "../../models/applicant";
import { Application } from "../../models/application";
import { ApplicationApplicant } from "../../models/application-applicant";
import { AppState } from "../../store";

export interface IApplicantsContainer {
  applicationId?: string;
}

export const ApplicantsContainer = ({
  applicationId
}: IApplicantsContainer): JSX.Element => {
  const applicant: Applicant = useSelector(
    (state: AppState) => state.applicant
  );
  const application: Application = useSelector(
    (state: AppState) => state.application
  );

  const linkRef = useRef<HTMLAnchorElement>(null);

  const dispatch = useDispatch();
  const loadApplicantPdfUrl = async (applicantId: string) => {
    dispatch(fetchApplicantPdfUrl(applicantId));
  };
  const loadApplication = async () => dispatch(fetchApplication(applicationId));
  const unloadApplicant = async () => dispatch(clearApplicant());
  const unloadApplication = async () => dispatch(clearApplication());
  const downloadApplicantPdf = async () => {
    linkRef.current?.click();
    unloadApplicant();
  };

  useEffect(() => {
    loadApplication();

    return () => {
      unloadApplication();
    };
  }, [dispatch]);

  useEffect(() => {
    if (applicant && applicant.applicantPdfSignedUrl) {
      downloadApplicantPdf();
    }
  }, [dispatch, applicant]);

  return (
    <div>
      <h1>Applicants Page</h1>
      <p>
        <Hyperlink
          title="Back to Tenant Page"
          href={`/tenant/${application?.tenantId}`}
        />
      </p>
      <p>Application Id: {application?.applicationId}</p>
      <p>Application Name: {application?.applicationName}</p>
      <a href={applicant?.applicantPdfSignedUrl} ref={linkRef} hidden />
      <table>
        <thead>
          <tr>
            <th>Applicant Name</th>
            <th>Date Submitted</th>
          </tr>
        </thead>
        <tbody>
          {application?.applicants?.map(
            (applicationApplicant: ApplicationApplicant) => (
              <tr key={applicationApplicant.applicantId}>
                <td
                  onClick={() =>
                    loadApplicantPdfUrl(applicationApplicant.applicantId)
                  }
                >
                  {applicationApplicant.applicantName}
                </td>
                <td>{applicationApplicant.dateSubmitted}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
