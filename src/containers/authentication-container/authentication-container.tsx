import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearUser, fetchUser } from "../../actions/user";
import { LoginButton } from "../../components/login-button";
import { LogoutButton } from "../../components/logout-button";
import { AppState, UserState } from "../../store";

export const AuthenticationContainer = ({
  children
}: {
  children: any;
}): JSX.Element => {
  const {
    data: user,
    isAuthenticated,
    isAuthorized
  }: UserState = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();
  const unloadUser = async () => dispatch(clearUser());
  const loadUser = async (userId: string) => dispatch(fetchUser(userId));

  if (!isAuthenticated) {
    return (
      <div className="authentication-containter">
        <LoginButton loadUser={loadUser} />
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="authentication-containter">
        <p>
          You are not authorized to see this page. Did you mean to login with
          another account?
        </p>
        <LoginButton loadUser={loadUser} />
      </div>
    );
  }

  return (
    <div className="authentication-containter">
      <LogoutButton unloadUser={unloadUser} />
      {children}
    </div>
  );
};
