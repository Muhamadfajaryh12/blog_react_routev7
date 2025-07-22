import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL + "/users";

export const Login = async ({ email, password }) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });
    return {
      status: response.data.status,
      message: response.data.message,
      token: response.data.data.token,
      role: response.data.data.role,
    };
  } catch (error) {
    return {
      message: error.response.data.message,
    };
  }
};

export const Register = async ({ email, name, password, role }) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      email,
      password,
      name,
      role,
    });
    return {
      status: response.data.status,
      message: response.data.message,
    };
  } catch (error) {
    console.log(error);
  }
};
