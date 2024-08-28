/* eslint-disable react/prop-types */
import { useState } from "react";

const SearchFilter = ({ data, render }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the data based on the search query
  const filteredData = data?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Search Input */}
      <div className="flex justify-center ">
        <input
          type="text"
          placeholder="Search..."
          className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none max-w-[450px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {/* Render the filtered data */}
      {render(filteredData)}
    </>
  );
};

export default SearchFilter;
