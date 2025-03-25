import React, { useState } from "react";
import Logo from "/src/assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const HnadleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className="container">
      <div className=" flex justify-between items-center py-5 mx-6">
        <img src={Logo} alt="logo" />

        <ul className="flex gap-10 text-xl text-grayBlack font-medium cursor-pointer font-DMsans">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"menu"}>Menu</Link>
          </li>
          <li>
            <Link to={"contactus"}>Contact</Link>
          </li>
        </ul>
        <button
          className="button font-DM sans hidden lg:block"
          onClick={() => HnadleNavigation("/booking")}
        >
          Book A Table
        </button>
      </div>
    </div>
  );
};

export default NavBar;
