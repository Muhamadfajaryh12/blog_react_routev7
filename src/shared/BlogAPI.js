import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const token = localStorage.getItem("token");

export const GetBlog = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/blogs/`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const PostBlog = async ({ formData }) => {
  try {
    const response = await axios.post(`${BASE_URL}/blogs`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return {
      data: response.data.data,
      message: response.data.message,
      status: response.data.status,
    };
  } catch (error) {
    console.log(error);
  }
};

export const UpdateBlog = async ({ id, formData }) => {
  try {
    const response = await axios.put(`${BASE_URL}/blogs/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return {
      data: response.data.data,
      message: response.data.message,
      status: response.data.status,
    };
  } catch (error) {
    console.log(error);
  }
};

export const DeleteBlog = async ({ id }) => {
  try {
    const response = await axios.delete(`${BASE_URL}/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return {
      data: response.data.data,
      message: response.data.message,
      status: response.data.status,
    };
  } catch (error) {
    console.log(error);
  }
};
