"use client";
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

import toast, { Toaster } from "react-hot-toast";
const notify = () => toast("⚠️ Login in work!");

export default function Login() {
  return (
    <div className="flex flex-col h-[400px] w-[400px] rounded-2xl border items-center py-3 login_box">
      <h2 className="text-3xl font-semibold my-10 text-slate-500">Login</h2>
      <div className="flex relative w-[400px] justify-center items-center">
        <FaUser className="absolute top-7 left-6 log_icon" />
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          className="w-[370px] h-12 px-7 my-3 rounded-lg bg-slate-200 hover:bg-slate-300 outline-none log_input"
        />
      </div>
      <div className="flex relative w-[400px] justify-center items-center">
        <IoMdLock className="absolute top-7 left-6 log_icon" />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="w-[370px] h-12 px-7 my-3 rounded-lg bg-slate-200 hover:text-gray-700 hover:bg-slate-300 text-gray-400 outline-none"
        />
      </div>

      <button
        onClick={notify}
        className="w-[380px] h-12 my-3 rounded-lg bg-sky-500 hover:bg-sky-600 duration-700"
      >
        Sign in
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
