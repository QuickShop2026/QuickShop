import axios from "axios";
import { BASE_URL } from "../config/api";

const API = `${BASE_URL}/products`;

export const getProducts = async () => {
  return await axios.get(API);
};

export const getProductById = async (id) => {
  return await axios.get(`${API}/${id}`);
};

export const createProduct = async (data) => {
  return await axios.post(API, data);
};

export const editProduct = async (id, data) => {
  return await axios.put(`${API}/${id}`, data);
};

export const removeProduct = async (id) => {
  return await axios.delete(`${API}/${id}`);
};