import axios from "axios";

const BASE_URL = process.env.AUTH_BASE_URL;

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
