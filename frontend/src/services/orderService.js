import axios from "axios";
import { BASE_URL } from "../config/api";

const API = `${BASE_URL}/orders`;

export const placeOrder = async (orderData) => {
  return await axios.post(API, orderData);
};