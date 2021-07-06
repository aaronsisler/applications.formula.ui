import { useRouter } from "next/router";

import TenantContainer, {
  ITenantContainer
} from "../../containers/tenant-container";

const TenantPage = (): JSX.Element => {
  const router = useRouter();
  const { tenantId }: ITenantContainer = router.query;
  return (
    <main>
      <TenantContainer tenantId={tenantId} />
    </main>
  );
};

export default TenantPage;
