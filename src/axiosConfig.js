import axios from "axios";

const axiosBase = axios.create({
  // baseURL: "http://localhost:5000/api",
    baseURL: "https://evangadi-forum-backend-deploy-27el.onrender.com/api",
});

export default axiosBase;
