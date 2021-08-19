import { AuthenticationContainer } from "../containers/authentication-container";
import { AdminContainer } from "../containers/admin-container";

const AdminPage = (): JSX.Element => (
  <main>
    <AuthenticationContainer>
      <AdminContainer />
    </AuthenticationContainer>
  </main>
);

export default AdminPage;
