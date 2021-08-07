import { useRouter } from "next/router";

import {
  ApplicationContainer,
  IApplicationContainer
} from "../../containers/application-container";
import { AuthenticationContainer } from "../../containers/authentication-container";

const ApplicationPage = (): JSX.Element => {
  const router = useRouter();
  const { applicationId }: IApplicationContainer = router.query;
  return (
    <main>
      <AuthenticationContainer>
        {applicationId && (
          <ApplicationContainer applicationId={applicationId} />
        )}
      </AuthenticationContainer>
    </main>
  );
};

export default ApplicationPage;
