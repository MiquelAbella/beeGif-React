import axios from "axios";

const BASE_URL = "http://localhost:4000/user";

export const registerUser = async (registerData) => {
  const res = await axios.post(`${BASE_URL}/register`, registerData);

  if (res.data.ok) {
    return res.data.user;
  } else {
    return null;
  }
};


export const loginUser = async (loginData) => {
  const res = await axios.post(`${BASE_URL}/login`, loginData);

  if (res.data.ok) {
    return res.data.user;
  } else {
    return null;
  }
};
