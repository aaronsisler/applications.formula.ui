import React, { MouseEventHandler } from "react";

import { Button } from "../../atoms/button";
import { User } from "../../models/user";
import { UserType } from "../../models/user-type";

interface IUserPromotionTableRow {
  onboardUser: MouseEventHandler;
  user: User;
}

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
        <Button
          isDisabled={isUserVisitor}
          onClick={onboardUser}
          text="Promote User"
        />
      </td>
    </tr>
  );
};
