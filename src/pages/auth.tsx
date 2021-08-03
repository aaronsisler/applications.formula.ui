import { AuthenticationContainer } from "../containers/authentication-container";

const AuthPage = (): JSX.Element => (
  <main>
    <AuthenticationContainer>
      <h2>I am from the page!</h2>
    </AuthenticationContainer>
  </main>
);

export default AuthPage;
