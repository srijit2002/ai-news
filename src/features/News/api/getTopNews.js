import { axios } from "@/lib/axios";

export const getTopNews = () => {
  return axios.post("article/getArticles", {
    action: "getArticles",
    keyword: "",
    articlesPage: 1,
    articlesCount: 20,
    articlesSortBy: "date",
    resultType: "articles",
    dataType: ["news", "pr"],
    forceMaxDataTimeWindow: 31,
    lang:"eng"
  });
};
