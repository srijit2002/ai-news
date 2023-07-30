import { formatDate } from "@/utils/formatDate";

export const Hero = ({ title, url, image, dateTime, publishedAt }) => {
  return (
    <section className="relative sm:mb-10 mb-14">
      <span className="clip absolute top-0 left-0 z-10 px-3 py-2 font-semibold uppercase text-sm bg-yellow">
        Featured
      </span>
      <img
        src={image}
        className="filter grayscale max-h-[80vh] object-cover"
        alt={title}
      />
      <section className="min-w-[70%] z-[100] sm:mt-10  flex gap-4 flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h3 className="text-lg text-white">
          {formatDate(publishedAt || dateTime)}
        </h3>
        <h1 className="font-playfair-display text-white font-[lora] text-center lg:text-5xl text-sm">
          {title}
        </h1>
      </section>
      <span className="z-[10] w-full h-full absolute left-0 top-0  bg-gradient-to-t from-gray-dark"></span>
    </section>
  );
};
