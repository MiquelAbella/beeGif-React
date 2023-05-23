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

  return (
    <UIContext.Provider
      value={{
        isLoginUserModalOpen,
        setIsLoginUserModalOpen,
        isAddGifModalOpen,
        setIsAddGifModalOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
