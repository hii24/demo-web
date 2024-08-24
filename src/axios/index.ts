import axios from "axios";
import { baseApiUrl } from "../api/config";

const axiosAuthorized = axios.create({
  baseURL: baseApiUrl,
});

axiosAuthorized.interceptors.request.use((req) => {
  const token = localStorage.getItem("Authorization");

  // @ts-ignore
  req.headers = {
    ...req.headers,
    Authorization: `Token ${token}`,
  };

  return req;
});

export { axiosAuthorized };
