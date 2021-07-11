import { useRouter } from "next/router";

import {
  ITenantContainer,
  TenantContainer
} from "../../containers/tenant-container";

const TenantPage = (): JSX.Element => {
  const router = useRouter();
  const { tenantId }: ITenantContainer = router.query;
  return <main>{tenantId && <TenantContainer tenantId={tenantId} />}</main>;
};

export default TenantPage;
