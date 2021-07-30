import { useRouter } from "next/router";

import {
  ApplicationContainer,
  IApplicationContainer
} from "../../containers/application-container";

const ApplicationPage = (): JSX.Element => {
  const router = useRouter();
  const { applicationId }: IApplicationContainer = router.query;
  return (
    <main>
      {applicationId && <ApplicationContainer applicationId={applicationId} />}
    </main>
  );
};

export default ApplicationPage;
