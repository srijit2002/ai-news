import { SearchBar } from "../components/SearchBar";

export const Header = ({ onSearch = () => {} }) => {
  return (
    <header className="w-full sm:py-6 flex flex-col gap-4 justify-between items-center my-4">
      <SearchBar onSearch={onSearch} />
      <h1 className="font-playfair-display text-6xl w-fit text-white md:absolute md:left-1/2 md:transform md:-translate-x-1/2">Ai News</h1>/
    </header>
  );
};
