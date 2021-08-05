import { AuthenticationContainer } from "../containers/authentication-container";
import { ManagerContainer } from "../containers/manager-container";

const ManagerPage = (): JSX.Element => (
  <main>
    <AuthenticationContainer>
      <ManagerContainer />
    </AuthenticationContainer>
  </main>
);

export default ManagerPage;
