import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const GetBlog = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/blogs/`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
