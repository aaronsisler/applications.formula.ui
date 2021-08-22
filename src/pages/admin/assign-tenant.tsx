import { AuthenticationContainer } from "../../containers/authentication-container";
import { AdminContainer } from "../../containers/admin-container";
import { AssignTenantContainer } from "../../containers/assign-tenant-container";

const AssignTenantPage = (): JSX.Element => (
  <main>
    <AuthenticationContainer>
      <AdminContainer>
        <AssignTenantContainer />
      </AdminContainer>
    </AuthenticationContainer>
  </main>
);

export default AssignTenantPage;
