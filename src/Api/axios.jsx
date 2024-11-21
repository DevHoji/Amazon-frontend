import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/e-clone-9d071/us-central1/api",

  baseURL: "https://vercel.com/hojiwak-yohanis-projects/amazon-api-deploy",
});

export {axiosInstance}

