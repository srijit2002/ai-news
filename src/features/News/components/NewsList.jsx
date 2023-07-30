import { NewsCard } from "./NewsCard";

export const NewsList = ({ data = [], currentlyReading }) => {
  return (
    <section className="flex gap-y-10 gap-x-8 justify-between flex-wrap mb-10">
      {data.map((news) => (
        <NewsCard
          key={news.url}
          {...news}
          active={currentlyReading?.url === news?.url}
        />
      ))}
    </section>
  );
};
