import { createContext, useReducer } from "react";
import { useContext } from "react";
import userReducer from "./userReducer";
import { loginUser, registerUser } from "../../API/user";
import { types } from "./userTypes";
import { useUI } from "../UIContext/UIContext";

export const UserContext = createContext();

export const useUser = () => {
  const state = useContext(UserContext);
  return state;
};

const init = () => {
  const user = null;

  return {
    user,
  };
};

export const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, {}, init);
  const { setMessageSuccessToaster, setMessageErrorToaster } = useUI();

  const register = async (registerData) => {
    const res = await registerUser(registerData);

    if (res) {
      dispatch({ type: types.register, payload: res });
      setMessageSuccessToaster("Successfuly registered");
      return res;
    } else {
      setMessageErrorToaster("Something happened... Try again...");
    }
    return res;
  };

  const login = async (loginData) => {
    const res = await loginUser(loginData);

    if (res) {
      dispatch({ type: types.login, payload: res });
      setMessageSuccessToaster("Successfuly logged");
      return res;
    } else {
      setMessageErrorToaster("Something happened... Try again...");
    }
    return res;
  };

  const logout = () => {
    dispatch({ type: types.logout, payload: null });
    setMessageSuccessToaster("See ya' soon!");
  };

  return (
    <UserContext.Provider
      value={{
        ...userState,
        register,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
