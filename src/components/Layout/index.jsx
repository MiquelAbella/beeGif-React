import { useUI } from "../../Context/UIContext/UIContext";
import { useUser } from "../../Context/UserContext/UserContext";
import { AddGifModal } from "../AddGifModal";
import { AuthModal } from "../AuthModal";
import { Nav } from "../Nav";

import { IoIosAddCircle } from "react-icons/io";

export const Layout = ({ children }) => {
  const { isLoginUserModalOpen, isAddGifModalOpen, setIsAddGifModalOpen } =
    useUI();
  const { user } = useUser();
  return (
    <>
      <Nav />
      {children}
      {user && (
        <div
          className="fixed bottom-4 right-4 p-4 bg-white rounded-full"
          onClick={() => setIsAddGifModalOpen(true)}
        >
          <IoIosAddCircle className="text-green-600 text-7xl " />
        </div>
      )}
      {/* modals */}
      {isLoginUserModalOpen ? <AuthModal /> : null}
      {isAddGifModalOpen ? <AddGifModal /> : null}
    </>
  );
};
