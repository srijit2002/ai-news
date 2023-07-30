import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import { ALAN_AI_API_KEY } from "@/config";
import { Hero, Header } from "@/features/misc";
import { getTopNews } from "../api/getTopNews";
import { searchNews } from "../api/searchNews";
import { NewsList } from "../components/NewsList";
import { Navbar } from "@/features/misc/";
import { TbZoomCancel } from "react-icons/tb";

export const Home = () => {
  const [articles, setArticles] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const getRandomNews = () => {
    return Math.round(articles.length * Math.random());
  };
  const [currentlyReading, setCurrentlyReading] = useState(null);
  useEffect(() => {
    alanBtn({
      key: ALAN_AI_API_KEY,
      onCommand: ({ command, data }) => {
        if (command === "highlight") {
          setCurrentlyReading(data);
        } else {
          setSearchResults(data);
        }
      },
    });
  }, []);
  useEffect(() => {
    const getAllNews = async () => {
      try {
        const response = await getTopNews();
        const articles = response?.data?.articles || [];
        console.log(articles);
        setArticles(articles.filter((article) => article.urlToImage));
      } catch (error) {
        console.log(error);
      }
    };
    getAllNews();
  }, []);
  const handleSearch = async (searchTerm) => {
    try {
      const response = await searchNews(searchTerm);
      const articles = response?.data?.articles || [];
      setSearchResults(articles);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <section className="px-4 lg::px-20 sm:px-10">
        {searchResults ? (
          <section className="mt-10">
            <button
              onClick={() => setSearchResults(null)}
              className="mb-4 bg-yellow flex items-center hover:opacity-70 gap-2 p-4 py-2 rounded-sm font-semibold text-lg"
            >
              <TbZoomCancel size={25} />
              Cancel Search
            </button>
            <NewsList
              data={searchResults}
              currentlyReading={currentlyReading}
            />
          </section>
        ) : (
          <>
            <Header onSearch={handleSearch} />
            <Hero {...articles[getRandomNews()]} />
            <NewsList data={articles} />
          </>
        )}
      </section>
    </>
  );
};
