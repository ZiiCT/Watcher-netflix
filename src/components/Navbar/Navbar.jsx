import { async } from "@firebase/util";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="flex item-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-green-800 text-4xl font-bold cursor-pointer">
          WATCHER
        </h1>
      </Link>

      {user?.email ? (
        <ul>
          <li>
            <Link to="account">
              <button className="text-white pr-4">Account</button>
            </Link>

            <button
              onClick={handleLogOut}
              className="bg-green-800 px-6 py-2 rounded cursor-pointer text-white"
            >
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="login">
              <button className="text-white pr-4">Log In</button>
            </Link>

            <Link to="signup">
              <button className="bg-green-800 px-6 py-2 rounded cursor-pointer text-white">
                Sign Up
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
