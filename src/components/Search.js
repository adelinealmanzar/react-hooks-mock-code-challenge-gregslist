import React, { useState } from "react";

function Search({ handleSearchValPass }) {
  const [searchVal, setSearchVal] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    handleSearchValPass(searchVal)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
