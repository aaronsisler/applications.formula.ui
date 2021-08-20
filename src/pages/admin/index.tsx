import { Hyperlink } from "../../atoms/hyperlink";

import { AuthenticationContainer } from "../../containers/authentication-container";
import { AdminContainer } from "../../containers/admin-container";

const AdminPage = (): JSX.Element => (
  <main>
    <AuthenticationContainer>
      <AdminContainer>
        <h1>Admin</h1>
        <p>
          <Hyperlink title="User Promotion" href="/admin/user-promotion" />
        </p>
        <p>
          <Hyperlink
            title="Assign Tenant to User"
            href="/admin/assign-tenant"
          />
        </p>
      </AdminContainer>
    </AuthenticationContainer>
  </main>
);

export default AdminPage;
