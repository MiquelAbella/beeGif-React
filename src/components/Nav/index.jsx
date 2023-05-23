import { useLocation, useNavigate } from "react-router-dom";
import { SearchBar } from "../SearchBar";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { useUser } from "../../Context/UserContext/UserContext";
import { useUI } from "../../Context/UIContext/UIContext";

export const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useUser();
  const { setIsLoginUserModalOpen } = useUI();

  const isSearchBarVisible = location.pathname === "/";

  return (
    <div className="fixed top-0 z-10 bg-[#161519] flex items-center justify-between p-6 w-full">
      <p
        className="text-white z-10 text-2xl cursor-pointer"
        onClick={() => navigate("/")}
      >
        BeeGifs
      </p>
      <div className="w-full">{isSearchBarVisible ? <SearchBar /> : null}</div>
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
