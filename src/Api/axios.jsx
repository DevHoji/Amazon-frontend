import axios from "axios";

// Replace the base URL with the Vercel deployed URL
const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-oyi3.vercel.app/", // Your Vercel backend URL
});

export { axiosInstance };
