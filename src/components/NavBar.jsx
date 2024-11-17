import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoIcon from "../assets/icons/logoIcon.png";
import userLogout from "../assets/icons/userLogout.png";

export default function NavBar() {
  const items = [
    <li key="home">
      <NavLink to="/">Home</NavLink>
    </li>,
    <li key="start-learning">
      <NavLink to="/start-learning">Start Learning</NavLink>
    </li>,
    <li key="tutorials">
      <NavLink to="/tutorials">Tutorials</NavLink>
    </li>,
    <li key="about-us">
      <NavLink to="/about-us">About Us</NavLink>
    </li>,
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {items}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={logoIcon} alt="Logo" className="w-10 h-10" />
          <p>Vocabulary Learning</p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{items}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn">
          <img src={userLogout} className="w-10 h-10" />{" "}
        </Link>
      </div>
    </div>
  );
}
