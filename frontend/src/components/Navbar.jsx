import React, { useContext } from "react";
import "../style.css";
import {  NavLink, useNavigate } from "react-router-dom";
import { userContext } from "../hooks/userContext";



const Navbar = () => {
  const { removeUser } = useContext(userContext);

  const navigate = useNavigate();
  // const history = useHistory();

  const handleLogout = () => {
    removeUser();
    navigate("/");
    // history.replace('')
  };
  return (
    <>
      <nav id="navbar" className=" border bg-gray-50 py-2 rounded-md sticky top-0 z-10">
        {/* mobile screens */}

        

        {/* desktop screens */}

        <div
          className=" flex justify-around w-full "
          id="nav-desktop"
        >
          <div className=" flex gap-4">

            <NavLink className={' border-b-2 border-white align-middle px-3 py-2 hover:border-green-400 hover:border-b-2'} to={''}>Upload Image</NavLink>
            <NavLink className={' border-b-2 border-white align-middle px-3 py-2 hover:border-green-400 hover:border-b-2'} to={'retrive'}>Gallery</NavLink>

          </div>

          <div className="" id="nav-right">
            <button
              className=" border border-red-500 px-3 rounded-md hover:bg-red-500 hover:text-white hover:border-red-700 py-2"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      {/* <ImageUpload />
      <ImageRetrive /> */}
    </>
  );
};

export default Navbar;
