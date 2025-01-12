"use client";

import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";
import { IoMdLock } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";

import toast, { Toaster } from "react-hot-toast";
const notify = () => toast("⚠️ Login in work!");

export default function Signup() {
  const [username, setUserName] = useState<string>("");
  const [useremail, setUserEmail] = useState<string>("");
  const [userphone, setUserPhone] = useState<string>("");
  const [userpass, setUserPass] = useState<string>("");
  const [warning, setWarning] = useState<string>("");
  const [showPass, SetShowPass] = useState<string>("password");
  const [showPassText, SetShowPassText] = useState<string>("Show");

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handleUserMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };

  const handleUserPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPhone(e.target.value);
  };

  const handleUserPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserPass(e.target.value);
    if (value.length < 8) {
      setWarning("Password must be at least 8 characters long.");
    } else {
      setWarning("");
    }
  };

  const showPassWord = (): void => {
    if (showPass == "password") {
      SetShowPass("text");
      SetShowPassText("Hide");
      console.log("Clicked");
    } else {
      SetShowPass("password");
      SetShowPassText("Show");
    }
  };

  const clearWarning = (): void => {
    setWarning("");
  };

  return (
    <div className="flex flex-col h-auto w-[400px] rounded-2xl justify-center items-center">
      <h2 className="text-3xl logTitle">Signup</h2>
      <div className="logFieldBox flex relative w-[370px] justify-center items-center floating-input-container">
        <FaUser className="log_icon" />
        <input
          type="text"
          id="floatingInput"
          value={username}
          onChange={handleUserName}
          className={username ? "has-content" : ""}
        />
        <label htmlFor="floatingInput">Enter Username</label>
      </div>
      <div className="logFieldBox flex relative w-[370px] justify-center items-center floating-input-container">
        <MdOutlineAlternateEmail className="log_icon" />
        <input
          type="text"
          id="floatingInput"
          value={useremail}
          onChange={handleUserMail}
          className={useremail ? "has-content" : ""}
        />
        <label htmlFor="floatingInput">Enter Your Email</label>
      </div>
      <div className="logFieldBox flex relative w-[370px] justify-center items-center floating-input-container">
        <FaPhone className="log_icon" />
        <input
          type="text"
          id="floatingInput"
          value={userphone}
          onChange={handleUserPhone}
          className={userphone ? "has-content" : ""}
        />
        <label htmlFor="floatingInput">Enter Phone Number</label>
      </div>
      <div className="logFieldBox flex relative w-[370px] justify-center items-center floating-input-container">
        <IoMdLock className="log_icon" />
        <input
          type={showPass}
          id="floatingInput"
          value={userpass}
          onChange={handleUserPass}
          onBlur={clearWarning}
          className={userpass ? "has-content" : ""}
        />
        <label htmlFor="floatingInput">Enter Password</label>
        <span onClick={showPassWord} className="passBtn">
          {showPassText}
        </span>
        <span className="warningPass">{warning}</span>
      </div>
      <div className="logFieldBox flex relative w-[370px] justify-center items-center px-[20px] mt-4">
        <span className="text-center text-[13px] text-slate-400">
          By signing up here, you agree to our
          <Link href="/error404" className="logLinks text-slate-100">
            Terms & Conditions
          </Link>
          ,
          <Link href="/error404" className="logLinks text-slate-100">
            Privacy Policy
          </Link>
          and
          <Link href="/error404" className="logLinks text-slate-100">
            Cookies Policy .
          </Link>
        </span>
      </div>

      <button
        onClick={notify}
        className="w-[350px] h-[9%] my-1 rounded-lg bg-sky-500 hover:bg-sky-600 duration-700"
      >
        Sign Up
      </button>

      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid gold",
            padding: "10px",
            color: "rgb(200, 200, 200)",
            background: "rgb(26, 26, 26)",
          },
        }}
      />
    </div>
  );
}
