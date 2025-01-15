"use client";
import React, { useState, useActionState } from "react";
import { authenticate } from "@/app/lib/actions";

import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

import { FaArrowRightToBracket } from "react-icons/fa6";
import { CiWarning } from "react-icons/ci";

export default function Login() {
  const [inputUserValue, setInputUserValue] = useState<string>("");
  const [inputPassValue, setInputPassValue] = useState<string>("");
  const [showPass, SetShowPass] = useState<string>("password");
  const [showPassText, SetShowPassText] = useState<string>("Show");

  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUserValue(e.target.value);
  };

  const handlePassInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPassValue(e.target.value);
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

  return (
    <div className="flex flex-col h-auto w-[400px] rounded-2xl items-center">
      <h2 className="text-3xl logTitle">Login</h2>
      <form action={formAction} className="flex flex-col h-auto items-center">
        <div className="logFieldBox flex relative justify-center items-center floating-input-container">
          <FaUser className="log_icon" />
          <input
            id="email"
            type="email"
            name="email"
            value={inputUserValue}
            onChange={handleUserInputChange}
            className={inputUserValue ? "has-content" : ""}
            required
          />
          <label htmlFor="email">Enter Email Address</label>
        </div>
        <div className="logFieldBox flex relative w-[370px] justify-center items-center floating-input-container">
          <IoMdLock className="log_icon" />
          <input
            id="password"
            name="password"
            type={showPass}
            value={inputPassValue}
            onChange={handlePassInputChange}
            className={inputPassValue ? "has-content" : ""}
            required
            minLength={6}
          />
          <label htmlFor="password">Enter Password</label>
          <span onClick={showPassWord} className="passBtn">
            {showPassText}
          </span>
        </div>

        <button
          type="submit"
          className="w-[350px] h-12 my-3 rounded-lg bg-sky-500 hover:bg-sky-600 duration-700 flex justify-center items-center"
          aria-disabled={isPending}
        >
          Log in <FaArrowRightToBracket className="h-5 w-5 text-gray-50" />
        </button>

        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <CiWarning className="h-5 w-5 text-yellow-500" />
              <p className="text-sm text-yellow-500">{errorMessage}</p>
            </>
          )}
        </div>
      </form>

      <div className="w-full flex h-[20px] justify-center items-center my-4">
        <div className="divideLine"></div>
        <span className="divideBtn">OR</span>
      </div>
      <div className="logIcons w-4/5">
        <div className="logIconBox flex justify-start items-center w-full  h-8 rounded-lg">
          <span className="Icongoogle"></span>
          <span className="text-slate-400 text-sm mx-3">Login with google</span>
        </div>
        <div className="logIconBox flex justify-start items-center w-full  h-8 rounded-lg">
          <span className="Icontwitter"></span>
          <span className="text-slate-400 text-sm mx-3">
            Login with Twitter
          </span>
        </div>
      </div>
    </div>
  );
}
