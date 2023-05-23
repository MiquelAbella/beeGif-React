import { createContext, useState } from "react";
import { useContext } from "react";

export const UIContext = createContext();

export const useUI = () => {
  const state = useContext(UIContext);
  return state;
};

export const UIProvider = ({ children }) => {
  const [isLoginUserModalOpen, setIsLoginUserModalOpen] = useState(false);
  const [isAddGifModalOpen, setIsAddGifModalOpen] = useState(false);
  const [messageSuccessToaster, setMessageSuccessToaster] = useState("");
  const [messageErrorToaster, setMessageErrorToaster] = useState("");

  return (
    <UIContext.Provider
      value={{
        isLoginUserModalOpen,
        setIsLoginUserModalOpen,
        isAddGifModalOpen,
        setIsAddGifModalOpen,
        messageSuccessToaster,
        setMessageSuccessToaster,
        messageErrorToaster,
        setMessageErrorToaster,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
