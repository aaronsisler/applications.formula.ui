import React from "react";
import { useDispatch } from "react-redux";

import { clearUser } from "../../actions/user";
import { LogoutButton } from "../../components/logout-button";

interface INavbar {}

export const Navbar = ({}: INavbar): JSX.Element => {
  const dispatch = useDispatch();
  const unloadUser = async () => dispatch(clearUser());

  return (
    <nav className="navbar bg-indigo-500 p-2">
      {/* TODO Make this an icon and not use their markup */}
      <LogoutButton unloadUser={unloadUser} />
    </nav>
  );
};
