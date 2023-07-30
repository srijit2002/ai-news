import Axios from "axios";
import { NEWS_API_URL, NEWS_API_KEY } from "@/config";
export const axios = Axios.create({ baseURL: NEWS_API_URL });
axios.interceptors.request.use((config) => {
  config.params = { ...config.params, apiKey: NEWS_API_KEY };
  return config;
});
