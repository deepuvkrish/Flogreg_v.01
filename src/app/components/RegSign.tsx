"use client";

import React, { useState } from "react";

import Login from "@/app/components/login/page";
import Signup from "@/app/components/signup/page";

const RegSign: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full w-full ">
      <div className="flex flex-col h-[90%] w-[400px] rounded-2xl justify-center items-center login_box">
        {isLogin ? <Login /> : <Signup />}
        <div className="toggle-button h-[10%]">
          {isLogin ? (
            <span className="text-white text-sm">
              New to Here?
              <span className="linkColor text-[16px]" onClick={handleToggle}>
                Sign Up
              </span>
            </span>
          ) : (
            <span className="text-white text-sm">
              Already have an account?
              <span
                className="linkColor text-[16px] font-extrabold"
                onClick={handleToggle}
              >
                Login
              </span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegSign;
