import React, { useContext } from "react";
import "../style.css";
import {  useNavigate } from "react-router-dom";
import { userContext } from "../hooks/userContext";
import ImageUpload from './ImageUpload'
import ImageRetrive from './ImageRetrive'


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
      <nav id="navbar">
        {/* mobile screens */}

        

        {/* desktop screens */}

        <div
          className=" flex justify-end w-full "
          id="nav-desktop"
        >
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
      <ImageUpload />
      <ImageRetrive />
    </>
  );
};

export default Navbar;
