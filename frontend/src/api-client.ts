import axios from "axios";
import { LoginFormData } from "./pages/Login";
import { RegisterFormData } from "./pages/Register";

const apiURL = import.meta.env.VITE_API_URL as string;

export const register = async (data: RegisterFormData) => {
  try {
    const response = await axios
      .post(`${apiURL}/api/v1/users/register`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .catch((error: Error) => console.error(error));

    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong while registering");
  }
};

export const login = async (data: LoginFormData) => {
  try {
    const response = await axios
      .post(`${apiURL}/api/v1/users/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .catch((error: Error) => console.error(error));

    return response;
  } catch (error) {
    throw new Error("Something wrong in loggin:" + error);
  }
};
