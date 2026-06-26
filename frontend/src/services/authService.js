import axios from "axios";
import { BASE_URL } from "../config/api";

const API = `${BASE_URL}/users`;

export const registerUser = async (userData) => {
  return await axios.post(
    `${API}/register`,
    userData
  );
};

export const loginUser = async (userData) => {
  return await axios.post(
    `${API}/login`,
    userData
  );
};