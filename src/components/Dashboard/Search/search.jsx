import React, { useState } from "react";
import { SearchContainer } from "./searchStyle";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <SearchContainer>
      <div className="searchCont">
        <input
          placeholder="Search for lost and found item"
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      {/* <div>
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>
              <div>{item.name}</div>
              <div>{item.email}</div>
            </li>
          ))}
        </ul>
      </div> */}
    </SearchContainer>
  );
};

export default Search;
