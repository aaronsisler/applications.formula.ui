import React from "react";
import { GoogleLogin } from "react-google-login";

import { OAUTH_PROVIDER_URL } from "../../config";

interface ILoginButton {
  loadUser: any;
}

export const LoginButton = ({ loadUser }: ILoginButton): JSX.Element => {
  const onSuccess = (res: any) => {
    const {
      familyName: lastName,
      givenName: firstName,
      email
    } = res.profileObj;

    const user = { userId: res.googleId, firstName, lastName, email };
    loadUser(user);
  };

  const onFailure = (res: any) => {
    console.log(res);
  };

  return (
    <div className="login-button">
      <GoogleLogin
        clientId={OAUTH_PROVIDER_URL}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        isSignedIn={true}
        className="flex-none mx-auto"
      />
    </div>
  );
};
