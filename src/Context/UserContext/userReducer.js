import { types } from "./userTypes";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.register:
      return { ...state, user: action.payload };
    case types.login:
      return { ...state, user: action.payload };
    case types.logout:
      return { ...state, user: action.payload };
    default:
      state;
  }
};

export default userReducer;
