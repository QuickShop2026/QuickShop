import axios from "axios";

import { BASE_URL } from "../config/api";

const API = `${BASE_URL}/brands`;

export const getBrands = async () => {
  return await axios.get(API);
};

export const createBrand = async (data) => {
  return await axios.post(`${API}/add`, data);
};