import React from "react";
import { SearchBar } from "../SearchBar";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { useUser } from "../../Context/UserContext/UserContext";
import { useUI } from "../../Context/UIContext/UIContext";

export const Nav = () => {
  const { user, logout } = useUser();
  const { setIsLoginUserModalOpen } = useUI();
  return (
    <div className="fixed top-0 z-10 bg-[#161519] flex items-center justify-between p-6 w-full">
      <p className="w-screen text-white z-10 text-2xl">BeeGifs</p>
      <div className="w-full">
        <SearchBar />
      </div>
      {user ? (
        <AiOutlineLogout
          className="text-white text-5xl ml-14 mr-4 cursor-pointer"
          onClick={logout}
        />
      ) : (
        <FaUserAlt
          className="text-white text-5xl ml-14 mr-4 cursor-pointer"
          onClick={() => setIsLoginUserModalOpen(true)}
        />
      )}
    </div>
  );
};
