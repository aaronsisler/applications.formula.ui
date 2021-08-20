import { AuthenticationContainer } from "../../containers/authentication-container";
import { AdminContainer } from "../../containers/admin-container";

const AssignTenantPage = (): JSX.Element => (
  <main>
    <AuthenticationContainer>
      <AdminContainer>Assign Tenant Container</AdminContainer>
    </AuthenticationContainer>
  </main>
);

export default AssignTenantPage;
