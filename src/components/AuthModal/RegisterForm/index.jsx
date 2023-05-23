import React, { useState } from "react";
import { useUser } from "../../../Context/UserContext/UserContext";
import { useUI } from "../../../Context/UIContext/UIContext";

export const RegisterForm = ({ isLoging, setIsLoging }) => {
  const { register } = useUser();
  const { setIsLoginUserModalOpen } = useUI();

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    repPassword: "",
  });

  const handleChangeRegisterData = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const res = register(registerData);
    if (res) {
      setIsLoginUserModalOpen(false);
    }
  };

  return (
    <form
      className="w-full h-full flex flex-col gap-6 items-center justify-center rounded-sm"
      onSubmit={handleRegister}
    >
      <p className="mb-6 w-full text-center text-6xl text-blue-400 font-bold">
        Register
      </p>
      <div className="w-full px-4 bg-white/50 rounded-md">
        <label className="text-gray-500" htmlFor="name">
          Name
        </label>
        <input
          onChange={handleChangeRegisterData}
          id="name"
          name="name"
          type="text"
          className="w-full border-b bg-transparent border-slate-500 text-xl px-4 py-2 text-gray-500 rounded-sm outline-none"
        />
      </div>
      <div className="w-full px-4 bg-white/50 rounded-md">
        <label className="text-gray-500" htmlFor="Email">
          email
        </label>
        <input
          onChange={handleChangeRegisterData}
          id="email"
          name="email"
          type="email"
          className="w-full border-b bg-transparent border-slate-500 text-xl px-4 py-2 text-gray-500 rounded-sm outline-none"
        />
      </div>
      <div className="w-full px-4 bg-white/50 rounded-md">
        <label className="text-gray-500" htmlFor="password">
          Password
        </label>
        <input
          onChange={handleChangeRegisterData}
          id="password"
          name="password"
          type="password"
          className="w-full border-b bg-transparent border-slate-500 text-xl px-4 py-2 text-gray-500 rounded-sm outline-none"
        />
      </div>
      <div className="w-full px-4 bg-white/50 rounded-md">
        <label className="text-gray-500" htmlFor="repPassword">
          Repeat Password
        </label>
        <input
          onChange={handleChangeRegisterData}
          id="repPassword"
          name="repPassword"
          type="password"
          className="w-full border-b bg-transparent border-slate-500 text-xl px-4 py-2 text-gray-500 rounded-sm outline-none"
        />
      </div>
      <button className="w-4/5 bg-cyan-600 text-white py-2 px-4">
        Register
      </button>
      <p
        onClick={() => setIsLoging(!isLoging)}
        className="cursor-pointer text-gray-600 text-lg font-bold"
      >
        I have an account
      </p>
    </form>
  );
};
