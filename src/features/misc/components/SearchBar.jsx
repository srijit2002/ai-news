import { useState, useRef, useEffect } from "react";
import { LuSearch } from "react-icons/lu";

export const SearchBar = ({ onSearch }) => {
  const ENTER_KEY_CODE = 13;
  const [search, setSearch] = useState("");
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.keyCode === ENTER_KEY_CODE) {
        buttonRef?.current?.click();
      }
    };
    const inputElement = inputRef?.current;
    inputElement.addEventListener("keyup", handleKeyUp);
    return () => {
      inputElement?.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return (
    <div className="flex items-center gap-2 md:self-end max-w-[20rem]">
      <button onClick={() => onSearch(search)} ref={buttonRef}>
        <LuSearch className="text-yellow" size={22} fontWeight="bold" />
      </button>
      <input
        ref={inputRef}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-transparent border-0 outline-none font-semibold text-white flex-1"
        placeholder="Search articles, topics..."
      />
    </div>
  );
};
