import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUsers } from "../../actions/user";
import { Loading } from "../../components/loading";
import { User } from "../../models/user";
import { AdminState, AppState } from "../../store";

export const AdminContainer = (): JSX.Element => {
  const { users, isLoading }: AdminState = useSelector(
    (state: AppState) => state.admin
  );
  const dispatch = useDispatch();
  const loadUsers = async () => dispatch(fetchUsers());

  useEffect(() => {
    loadUsers();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container px-6 py-4 mx-auto">
      <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {users?.map((user: User) => (
          <p key={user.userId}>
            <span>
              {user.lastName},&nbsp;{user.firstName}
            </span>
            <br />
            <span>{user.email}</span>
          </p>
        ))}
      </div>
    </div>
  );
};
