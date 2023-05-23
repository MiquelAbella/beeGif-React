import React, { useState } from "react";
import { useUser } from "../../../Context/UserContext/UserContext";
import { useUI } from "../../../Context/UIContext/UIContext";

export const LoginForm = ({ isLoging, setIsLoging }) => {
  const { login } = useUser();
  const { setIsLoginUserModalOpen } = useUI();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChangeLoginData = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await login(loginData);
    if (res) {
      setIsLoginUserModalOpen(false);
    }
  };

  return (
    <form
      className="w-full h-full flex flex-col gap-6 items-center justify-center rounded-sm"
      onSubmit={handleLogin}
    >
      <p className="mb-6 w-full text-center text-6xl text-blue-400 font-bold">Login</p>
      <div className="w-full px-4 bg-white/50 rounded-md">
        <label className="text-gray-500" htmlFor="Email">
          email
        </label>
        <input
          onChange={handleChangeLoginData}
          name="email"
          id="email"
          type="email"
          className="w-full border-b bg-transparent border-slate-500 text-xl px-4 py-2 text-gray-500 rounded-sm outline-none"
        />
      </div>
      <div className="w-full px-4 bg-white/50 rounded-md">
        <label className="text-gray-500" htmlFor="password">
          Password
        </label>
        <input
          onChange={handleChangeLoginData}
          name="password"
          id="password"
          type="password"
          className="w-full border-b bg-transparent border-slate-500 text-xl px-4 py-2 text-gray-500 rounded-sm outline-none"
        />
      </div>
      <button className="w-4/5 bg-cyan-600 text-white py-2 px-4">Login</button>
      <p onClick={() => setIsLoging(!isLoging)} className="cursor-pointer text-gray-600 text-lg font-bold">
        I don't have an account
      </p>
    </form>
  );
};
