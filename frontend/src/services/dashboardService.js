import axios from "axios";

const API = "http://localhost:5000/api";

export const getDashboardData = () => {
  return axios.get(`${API}/dashboard`);
};