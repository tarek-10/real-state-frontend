import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-state-backend-production.up.railway.app/api",
  withCredentials: true,
});
export default apiRequest;
