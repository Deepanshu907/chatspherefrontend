import axios from "axios";

// Correct logic: use local backend in development, Render backend in production
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://chatsphere-1-hkyo.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // for cookies (sessions, JWT)
});
