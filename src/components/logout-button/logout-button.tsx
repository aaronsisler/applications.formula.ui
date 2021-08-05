import React from "react";
import { GoogleLogout } from "react-google-login";

import { OAUTH_PROVIDER_URL } from "../../config";

interface ILoginButton {
  unloadUser: any;
}

export const LogoutButton = ({ unloadUser }: ILoginButton): JSX.Element => {
  const onSuccess = () => {
    unloadUser();
  };

  const onFailure = () => {
    console.log("Logged out failure");
  };

  return (
    <div className="logout-button">
      <GoogleLogout
        clientId={OAUTH_PROVIDER_URL}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
};
