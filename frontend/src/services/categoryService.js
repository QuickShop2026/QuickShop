import axios from "axios";

import { BASE_URL } from "../config/api";

const API = `${BASE_URL}/categories`;

export const getCategories = async () => {
  return await axios.get(API);
};

export const createCategory = async (data) => {
  return await axios.post(`${API}/add`, data);
};