import { AuthenticationContainer } from "../../containers/authentication-container";
import { AdminContainer } from "../../containers/admin-container";
import { UserPromotionContainer } from "../../containers/user-promotion-container";

const UserPromotionPage = (): JSX.Element => (
  <main>
    <AuthenticationContainer>
      <AdminContainer>
        <UserPromotionContainer />
      </AdminContainer>
    </AuthenticationContainer>
  </main>
);

export default UserPromotionPage;
