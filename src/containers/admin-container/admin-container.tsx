import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";

import { fetchUsers } from "../../actions/user";
import { Loading } from "../../components/loading";
import { AdminState, AppState, UserState } from "../../store";

export const AdminContainer = (): JSX.Element => {
  const { isLoading }: AdminState = useSelector(
    (state: AppState) => state.admin
  );
  const { isAdmin }: UserState = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();
  const loadUsers = async () => dispatch(fetchUsers());

  useEffect(() => {
    loadUsers();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  const baseClass = "authentication-container h-full flex";

  if (!isAdmin) {
    return (
      <div className={cn(baseClass, "p-10 flex-col items-center")}>
        <div className="mb-8 text-center">
          You are not authorized to see this page.
        </div>
      </div>
    );
  }

  return <div>User Onboarding & Tenant Assignment</div>;
};
