import { axios } from "@/lib/axios";

export const getTopNews = () => {
  return axios.get("top-headlines", { params: { country: "us" } });
};
