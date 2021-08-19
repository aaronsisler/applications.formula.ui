import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";

import { clearUser, fetchUser } from "../../actions/user";
import { LoginButton } from "../../components/login-button";
import { LogoutButton } from "../../components/logout-button";
import { Navbar } from "../../components/navbar";
import { User } from "../../models/user";
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
  const loadUser = async (user: User) => dispatch(fetchUser(user));

  const baseClass = "authentication-container h-full flex";

  if (!isAuthenticated) {
    return (
      <div className={cn(baseClass, "p-10 justify-center")}>
        <LoginButton loadUser={loadUser} />
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className={cn(baseClass, "p-10 flex-col items-center")}>
        <div className="mb-8 text-center">
          You are not authorized to see this page. Did you mean to login with
          another account?
        </div>
        <div className="flex space-x-4">
          <LoginButton loadUser={loadUser} />
          <LogoutButton unloadUser={unloadUser} />
        </div>
      </div>
    );
  }

  return (
    <div className={cn(baseClass, "flex-col")}>
      <Navbar />
      <div className="p-2">{children}</div>
    </div>
  );
};
