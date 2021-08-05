import { useRouter } from "next/router";

import { AuthenticationContainer } from "../../containers/authentication-container";
import {
  ITenantContainer,
  TenantContainer
} from "../../containers/tenant-container";

const TenantPage = (): JSX.Element => {
  const router = useRouter();
  const { tenantId }: ITenantContainer = router.query;
  return (
    <main>
      <AuthenticationContainer>
        {tenantId && <TenantContainer tenantId={tenantId} />}
      </AuthenticationContainer>
    </main>
  );
};

export default TenantPage;
