import { axios } from "@/lib/axios";

export const searchNews = (q) => {
  return axios.get("everything", { params: { q, sortBy: "popularity" } });
};
