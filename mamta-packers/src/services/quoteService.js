import axios from "axios";
import API_BASE_URL from "../utils/api";

// Get all quotes
export const getAllQuotes = async () => {
  const res = await axios.get(`${API_BASE_URL}/api/admin/quotes`);
  return res.data;
};

// Create a new quote (optional)
export const createQuote = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/api/admin/quotes`, data);
  return res.data;
};
