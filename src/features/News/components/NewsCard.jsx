import { formatDate } from "@/utils/formatDate";
import { useRef } from "react";
export const NewsCard = ({ title, url, urlToImage,image,published_at, publishedAt, active }) => {
  const cardRef = useRef(null);
  if (active) {
    cardRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
  return (
    <article
      ref={cardRef}
      className={`relative md:max-w-lg grow min-w-[320px] w-1/3 ${
        active ? "border-2 border-yellow" : ""
      }`}
    >
      <span className="clip absolute top-0 left-0 z-10 px-3 py-1.5 pr-6 font-semibold uppercase text-sm bg-yellow">
        Top Stories
      </span>
      <img
        src={urlToImage||image}
        className="filter grayscale object-cover"
        alt={title}
      />
      <section className="min-w-[80%] z-[100] lg:mt-6 mt-5  flex gap-4 flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h3 className="text-sm font-[lora] text-white">{formatDate(publishedAt||published_at)}</h3>
        <h1 className="font-[roboto] font-medium text-white  text-center text-sm sm:text-base ">
          {title}
          <a href={url} className="px-4 text-yellow cursor-pointer" target="_blank" rel="noreferrer">Learn More</a>
        </h1>
      </section>
      <span className="z-[10] w-full h-full absolute left-0 top-0  bg-gradient-to-t from-gray-dark"></span>
    </article>
  );
};
