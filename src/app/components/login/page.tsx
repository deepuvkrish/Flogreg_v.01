"use client";
import React, { useState } from "react";

import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { useRouter } from "next/navigation";

import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const [inputUserValue, setInputUserValue] = useState<string>("");
  const [inputPassValue, setInputPassValue] = useState<string>("");
  const [warning, setWarning] = useState<string>("");
  const [showPass, SetShowPass] = useState<string>("password");
  const [showPassText, SetShowPassText] = useState<string>("Show");
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const notify = () => toast("Invalid credentials");

  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUserValue(e.target.value);
  };

  const handlePassInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputPassValue(e.target.value);
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

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");

    const res = await fetch("../../api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inputUserValue, inputPassValue }),
    });
    if (res.ok) {
      router.push("/home");
    } else {
      const data = await res.json();
      setError(data.message);
      notify();
    }
  };

  return (
    <div className="flex flex-col h-auto w-[400px] rounded-2xl items-center">
      <h2 className="text-3xl logTitle">Login</h2>
      <form
        onSubmit={handleLogin}
        className="flex flex-col h-auto items-center"
      >
        <div className="logFieldBox flex relative justify-center items-center floating-input-container">
          <FaUser className="log_icon" />
          <input
            type="text"
            id="floatingInput"
            value={inputUserValue}
            onChange={handleUserInputChange}
            className={inputUserValue ? "has-content" : ""}
            required
          />
          <label htmlFor="floatingInput">Enter Username</label>
        </div>
        <div className="logFieldBox flex relative w-[370px] justify-center items-center floating-input-container">
          <IoMdLock className="log_icon" />
          <input
            type={showPass}
            id="floatingInput"
            value={inputPassValue}
            onChange={handlePassInputChange}
            onBlur={clearWarning}
            className={inputPassValue ? "has-content" : ""}
            required
          />
          <label htmlFor="floatingInput">Enter Password</label>
          <span onClick={showPassWord} className="passBtn">
            {showPassText}
          </span>
          <span className="warningPass">{warning}</span>
        </div>

        <button
          type="submit"
          className="w-[350px] h-12 my-3 rounded-lg bg-sky-500 hover:bg-sky-600 duration-700"
        >
          Log in
        </button>

        {error && <p>{error}</p>}
      </form>
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
