import React, { useState } from "react";
import Search from "./Search";

function Header({ handleSearchValPass, handleSortPass }) {
  const [isClicked, setIsClicked] = useState(false)

  function handleSortClick() {
    setIsClicked(isClicked => !isClicked)
  }

  handleSortPass(isClicked)

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearchValPass={handleSearchValPass}/>
      <button onClick={handleSortClick}>Alphabetically</button>
    </header>
  );
}

export default Header;
