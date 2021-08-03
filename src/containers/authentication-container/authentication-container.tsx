import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearUser, fetchUser } from "../../actions/user";
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
  const loadUser = async () => dispatch(fetchUser(userMock.userId));

  if (!user?.userId) {
    return (
      <div className="authentication-containter">
        {children}
        <button onClick={loadUser}>Click me to load User</button>
      </div>
    );
  }
  return (
    <div className="authentication-containter">
      <h1>{user.lastName}</h1>
      <button onClick={unloadUser}>Click me to clear User</button>
    </div>
  );
};
