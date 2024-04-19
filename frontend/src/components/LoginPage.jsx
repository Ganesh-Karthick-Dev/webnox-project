import React, { useContext, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { userContext } from "../hooks/userContext";
import "../style.css";
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from 'jwt-decode'
// import loginBg from '../assest/photos/yummy-logo-18.jpeg'



const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [res, setRes] = useState("");

  const { addUser } = useContext(userContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    let data = {
      username,
      password,
    };

    axios
      .post("http://localhost:8000/user/read", data)
      .then((d) => {
        console.log(`user found 😁`);
        setRes(d.data.val);
        addUser(username);
        setUsername("");
        setPassword("");
        navigate("home");
      })
      .catch((err) => {
        console.log(err);
        let errorData = JSON.stringify(err.response.data);
        setRes(errorData);
      });
  };

  return (
    <>
      <div className=" md:flex bg-grey-100">
        <div
          id="login"
          className=" sm:w-full flex flex-col py-10 h-screen justify-center items-center font-primary"
        >
          <div id="login-box" className=" border border-gray-700 shadow-lg bg-white shadow-slate-600 px-8 py-8 rounded-md">
            <h1 className=" text-center">
              <span className=" text-3xl text-amber-400">L</span>ogin to get
              Started !
            </h1>

            {
              res !== '' && <h4 className=" text-red-500 border border-red-500 rounded-md mt-2  text-center font-extrabold text-xl">
              {res}
            </h4>
            }

            

            <div className=" sm:w-full md:w-fit p-5  flex flex-col gap-4">
              <table className="">
                <tbody>
                  <tr className=" flex flex-col gap-2 mb-3">
                    <td>
                      <label htmlFor="username">User Name</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                        className=" border w-full border-zinc-300 rounded-md p-2"
                      />
                    </td>
                  </tr>
                  <tr className=" flex flex-col gap-2">
                    <td>
                      <label htmlFor="password">Password</label>
                    </td>
                    <td>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        className=" border w-full border-zinc-300 rounded-md p-2"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                onClick={handleLogin}
                className=" text-dark font-bold text-lime-800 bg-lime-400 py-2 hover:text-white hover:bg-lime-600 rounded-md"
              >
                Login
              </button>

              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  // console.log(credentialResponse);
                  let data = jwtDecode(credentialResponse.credential)
                  console.log(data);
                  addUser(data.name)
                  navigate('/home')
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />

            </div>

            <h1 className=" text-center">
              Doesn't have an account yet ?
              <NavLink className={` text-red-500 underline`} to="signup">
                signup
              </NavLink>
            </h1>
          </div>
        </div>

        {/* <div id="login-right" className=" md:block md:w-1/2"></div> */}
      </div>
    </>
  );
};

export default LoginPage;
