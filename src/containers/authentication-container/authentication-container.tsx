import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearUser, fetchUser } from "../../actions/user";
import { Hyperlink } from "../../atoms/hyperlink";
import { LoginButton } from "../../components/login-button";
import { LogoutButton } from "../../components/logout-button";
import { User } from "../../models/user";
import { IState } from "../../store/initial-state";

const userMock = { userId: "123" };

export const AuthenticationContainer = ({
  children
}: {
  children: any;
}): JSX.Element => {
  const user: User = useSelector((state: IState) => state.user);
  const dispatch = useDispatch();
  const unloadUser = async () => dispatch(clearUser());
  const loadUser = async (userId: string) => dispatch(fetchUser(userId));

  if (!user?.userId) {
    return (
      <div className="authentication-containter">
        <button onClick={() => loadUser(userMock.userId)}>
          Click me to load User
        </button>
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
