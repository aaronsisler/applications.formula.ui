import { useRouter } from "next/router";

import {
  ApplicantsContainer,
  IApplicantsContainer
} from "../../containers/applicants-container";
import { AuthenticationContainer } from "../../containers/authentication-container";

const ApplicationPage = (): JSX.Element => {
  const router = useRouter();
  const { applicationId }: IApplicantsContainer = router.query;
  return (
    <main>
      <AuthenticationContainer>
        {applicationId && <ApplicantsContainer applicationId={applicationId} />}
      </AuthenticationContainer>
    </main>
  );
};

export default ApplicationPage;
