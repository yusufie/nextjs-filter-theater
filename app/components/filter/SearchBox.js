"use client";
import { useState, useEffect } from "react";
import { events } from "../../data/mockData";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = events.filter((event) =>
      event.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="relative inline-block">
      <input
        type="text"
        className=" text-black py-2 px-4 rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Etkinlik Ara"
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm.length > 0 && searchResults.length > 0 && (
        <ul className="absolute z-10 top-full left-0 w-full py-2 mt-1 bg-white rounded-md shadow-lg">
          {searchResults.slice(0, 12).map((item) => (
            <li
              key={item.id}
              className="text-black px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setSearchTerm(item.title);
                setSearchResults([]);
              }}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;

