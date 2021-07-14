import { useRouter } from "next/router";

import {
  ApplyContainer,
  IApplyContainer
} from "../../containers/apply-container";

const ApplyPage = (): JSX.Element => {
  const router = useRouter();
  const { applicationId }: IApplyContainer = router.query;
  return (
    <main>
      {applicationId && <ApplyContainer applicationId={applicationId} />}
    </main>
  );
};

export default ApplyPage;
