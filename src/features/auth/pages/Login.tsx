import React from "react";
import { Link } from "react-router-dom";
import DashBoardSVG from "../../../assets/images/dashboard.svg";

const LoginPage = () => {
  return (
    <div className="bg-white-smoke">
      <div className="flex items-center justify-center">
        <div className="h-screen px-20 py-20 hidden lg:flex">
          <img src={DashBoardSVG} alt="dashboard" className="w-full h-full" />
        </div>
        <div className="w-500px lg:px-0 h-screen bg-white">
          <div className="px-10 pt-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Welcome to Admin
              </h2>
              <p className=" text-gray-600 mt-3 leading-tight">
                Please sign-in to your account and start the adventure
              </p>
            </div>
            <div className="mt-5 space-y-5">
              <div className="flex w-full flex-col">
                <label className="text-sm text-gray-400 leading-none mb-2">
                  Username
                </label>
                <input
                  placeholder="username"
                  className="px-2 py-2 border rounded-lg focus:border-blue-400 outline-none text-gray-400"
                />
              </div>
              <div className="flex w-full flex-col">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm text-gray-400 leading-none ">
                    Password
                  </label>
                  <Link
                    to="/auth/forgot-password"
                    className="inline-block text-sm text-blue-400 leading-none"
                  >
                    forgot password
                  </Link>
                </div>
                <input
                  placeholder="password"
                  className="px-2 py-2 border rounded-lg focus:border-blue-400 outline-none  text-gray-400"
                />
              </div>
              <div>
                <button className="px-2 py-2 w-full bg-blue-500 rounded-lg text-white mt-4 outline-none focus:outline-none">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
