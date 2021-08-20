import React from "react";
import { useSelector } from "react-redux";
import cn from "classnames";

import { Loading } from "../../components/loading";
import { AppState, UserState } from "../../store";

import { UserType } from "../../models/user-type";

export const AdminContainer = ({
  children
}: {
  children: any;
}): JSX.Element => {
  const { data: user, isLoading }: UserState = useSelector(
    (state: AppState) => state.user
  );

  if (isLoading) {
    return <Loading />;
  }

  const baseClass = "authentication-container h-full flex";

  if (user?.userType !== UserType.ADMIN) {
    return (
      <div className={cn(baseClass, "p-10 flex-col items-center")}>
        <div className="mb-8 text-center">
          You are not authorized to see this page.
        </div>
      </div>
    );
  }

  return <React.Fragment>{children}</React.Fragment>;
};
