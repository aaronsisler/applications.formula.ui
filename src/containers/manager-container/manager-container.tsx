import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { IState } from "../../store/initial-state";
import { setUser } from "../../actions/user";
import { fetchTenants } from "../../actions/tenants";

const userMock = { userId: "123", firstName: "Aaron", lastName: "Sisler" };

const managerContainerState = () => {
  const tenants = useSelector((state: IState) => state.tenants);
  const user = useSelector((state: IState) => state.user);
  const dispatch = useDispatch();
  const loadUser = () => dispatch(setUser(userMock));
  const loadTenants = () => dispatch(fetchTenants());
  return { tenants, user, loadUser, loadTenants };
};

const ManagerContainer = (): JSX.Element => {
  const { tenants, user, loadUser, loadTenants } = managerContainerState();
  return (
    <div>
      <h1>
        User: <span>{user?.firstName}</span>
      </h1>
      <h1>
        Tenants Length: <span>{tenants.length}</span>
      </h1>
      <button onClick={loadUser}>Load User</button>
      <button onClick={loadTenants}>Load Tenants</button>
    </div>
  );
};

export default ManagerContainer;
