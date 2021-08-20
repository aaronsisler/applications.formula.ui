import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { authorizeUser, fetchUsers } from "../../actions/user";
import { Loading } from "../../components/loading";
import { UserPromotionTableRow } from "../../components/user-promotion-table-row";
import { User } from "../../models/user";
import { AdminState, AppState } from "../../store";

export const UserPromotionContainer = (): JSX.Element => {
  const { isLoading, users }: AdminState = useSelector(
    (state: AppState) => state.admin
  );
  const dispatch = useDispatch();
  const loadUsers = async () => dispatch(fetchUsers());
  const promoteUser = async (user: User) => dispatch(authorizeUser(user));

  useEffect(() => {
    loadUsers();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <table className="table-auto min-w-full">
        <thead>
          <tr className="bg-indigo-900">
            <th className="p-2 text-right text-gray-100">Display Name</th>
            <th className="p-2 text-gray-100">Email</th>
            <th className="p-2 text-gray-100">User Type</th>
            <th className="p-2 text-gray-100">Date Submitted</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: User) => (
            <UserPromotionTableRow
              key={user.userId}
              user={user}
              onboardUser={() => promoteUser(user)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
