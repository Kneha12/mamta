import axios from "axios";
import API_BASE_URL from "../utils/api";

export const getAllBlogs = async () => {
  const res = await axios.get(`${API_BASE_URL}/api/admin/blogs`);
  return res.data;
};

export const createBlog = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/api/admin/blogs`, data);
  return res.data;
};
