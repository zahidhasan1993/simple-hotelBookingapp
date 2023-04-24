import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../providers/AuthProviders";

const Navbar = () => {
  const { user,handleLogOut } = useContext(dataContext);
  const handleLog = () => {
    handleLogOut()
    .then(() => {})
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <div className="navbar mt-3 mb-9 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Wanderstay</a>
      </div>
      {user && <div className="navbar-center">{user.email}</div>}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        {
          user && <button onClick={handleLog} className="btn btn-error">Logout</button>
        }
      </div>
    </div>
  );
};

export default Navbar;
