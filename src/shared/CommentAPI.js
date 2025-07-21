import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_URL}/comments`;

const token = localStorage.getItem("token");
export const PostComment = async ({ blog_id, content }) => {
  try {
    const response = await axios.post(
      `${BASE_URL}`,
      {
        blog_id,
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      data: response.data.data,
      message: response.data.message,
      status: response.data.status,
    };
  } catch (error) {
    console.log(error);
    return {
      status: error.response.data.status,
    };
  }
};
