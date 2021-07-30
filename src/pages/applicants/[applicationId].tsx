import { useRouter } from "next/router";

import {
  ApplicantsContainer,
  IApplicantsContainer
} from "../../containers/applicants-container";

const ApplicationPage = (): JSX.Element => {
  const router = useRouter();
  const { applicationId }: IApplicantsContainer = router.query;
  return (
    <main>
      {applicationId && <ApplicantsContainer applicationId={applicationId} />}
    </main>
  );
};

export default ApplicationPage;
