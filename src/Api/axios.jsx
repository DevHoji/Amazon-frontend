import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://us-central1-your-project-id.cloudfunctions.net/api", // Firebase Functions URL
});

export { axiosInstance };
