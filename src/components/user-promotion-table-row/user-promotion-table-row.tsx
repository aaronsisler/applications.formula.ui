import React, { MouseEventHandler } from "react";
import cn from "classnames";

import { User } from "../../models/user";
import { UserType } from "../../models/user-type";

interface IUserPromotionTableRow {
  onboardUser: MouseEventHandler;
  user: User;
}

const buttonClassBase = "px-4 py-2 border rounded-md bg-indigo-500 text-white";
const buttonClassHover =
  "hover:bg-white hover:text-indigo-500 border-indigo-500";

const buttonClassDisabled = "opacity-50 bg-blue-900 cursor-not-allowed";

export const UserPromotionTableRow = ({
  onboardUser,
  user
}: IUserPromotionTableRow): JSX.Element => {
  const isUserVisitor = user.userType !== UserType.VISITOR;

  return (
    <tr className="bg-white border-2 border-indigo-200">
      <td className="p-4 text-right">
        {user.lastName}, {user.firstName}
      </td>
      <td className="p-4 text-right">{user.email}</td>
      <td className="p-4 text-right">{user.userType}</td>
      <td className="flex p-2 justify-around">
        <button
          disabled={isUserVisitor}
          onClick={onboardUser}
          className={cn(
            buttonClassBase,
            buttonClassHover,
            isUserVisitor ? buttonClassDisabled : ""
          )}
        >
          Promote User
        </button>
      </td>
    </tr>
  );
};
