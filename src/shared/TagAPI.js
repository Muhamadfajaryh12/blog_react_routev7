import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL + `/tags`;

export const getTag = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return {
      data: response.data?.data,
      status: response.data?.status,
      message: response.data?.message,
    };
  } catch (error) {
    console.log(error);
  }
};
