import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastMessageError, toastMessageSuccess } from "../../utils/toaster";
import { useUI } from "../../Context/UIContext/UIContext";
import { useUser } from "../../Context/UserContext/UserContext";
import { AddGifModal } from "../AddGifModal";
import { AuthModal } from "../AuthModal";
import { Nav } from "../Nav";

import { IoIosAddCircle } from "react-icons/io";
import { useEffect } from "react";

export const Layout = ({ children }) => {
  const {
    isLoginUserModalOpen,
    isAddGifModalOpen,
    setIsAddGifModalOpen,
    setMessageSuccessToaster,
    setMessageErrorToaster,
    messageSuccessToaster,
    messageErrorToaster,
  } = useUI();
  const { user } = useUser();

  useEffect(() => {
    if (messageSuccessToaster !== "") {
      toastMessageSuccess(messageSuccessToaster);
      setMessageSuccessToaster("");
    }
  }, [messageSuccessToaster]);

  useEffect(() => {
    if (messageErrorToaster !== "") {
      toastMessageError(messageErrorToaster);
      setMessageErrorToaster("");
    }
  }, [messageErrorToaster]);

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

      <ToastContainer />
    </>
  );
};
