import React, { useEffect } from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearApplicant, fetchApplicantPdfUrl } from "../../actions/applicant";
import { clearApplication, fetchApplication } from "../../actions/application";
import { ApplicantTableRow } from "../../components/applicant-table-row";
import { Loading } from "../../components/loading";
import { ApplicationApplicant } from "../../models/application-applicant";
import { ApplicantState, ApplicationState, AppState } from "../../store";

export interface IApplicantsContainer {
  applicationId?: string;
}

export const ApplicantsContainer = ({
  applicationId
}: IApplicantsContainer): JSX.Element => {
  const applicantState: ApplicantState = useSelector(
    (state: AppState) => state.applicant
  );
  const { data: application, isLoading }: ApplicationState = useSelector(
    (state: AppState) => state.application
  );

  const linkRef = useRef<HTMLAnchorElement>(null);

  const dispatch = useDispatch();
  const loadApplication = async () => dispatch(fetchApplication(applicationId));
  const unloadApplication = async () => dispatch(clearApplication());

  const loadApplicantPdfUrl = async (applicantId: string) => {
    dispatch(fetchApplicantPdfUrl(applicantId));
  };
  const unloadApplicant = async () => dispatch(clearApplicant());
  const downloadApplicantPdf = async () => {
    linkRef.current?.click();
    setTimeout(() => {
      unloadApplicant();
    }, 1000);
  };

  useEffect(() => {
    loadApplication();

    return () => {
      unloadApplication();
    };
  }, [dispatch]);

  useEffect(() => {
    if (applicantState && applicantState.applicantPdfSignedUrl) {
      downloadApplicantPdf();
    }
  }, [dispatch, applicantState]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="pt-5 px-2 max-w-4xl">
      <a href={applicantState?.applicantPdfSignedUrl} ref={linkRef} hidden />
      <table className="table-auto min-w-full">
        <thead>
          <tr className="bg-indigo-900">
            <th className="p-2 text-right text-gray-100">Applicant Name</th>
            <th className="p-2 text-gray-100">Application</th>
            <th className="p-2 text-gray-100">Date Submitted</th>
          </tr>
        </thead>
        <tbody>
          {application?.applicants?.map(
            (applicationApplicant: ApplicationApplicant) => (
              <ApplicantTableRow
                key={applicationApplicant.applicantId}
                applicantName={applicationApplicant.applicantName}
                isFetchingPdf={applicantState.isLoading}
                dateSubmitted={applicationApplicant.dateSubmitted}
                downloadApplication={() =>
                  loadApplicantPdfUrl(applicationApplicant.applicantId)
                }
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
