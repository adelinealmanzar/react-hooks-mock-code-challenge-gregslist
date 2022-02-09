import React, { useState } from "react";
import Search from "./Search";

function Header({ handleSearchValPass, setIsClicked }) {
  

  function handleSortClick() {
    setIsClicked(isClicked => !isClicked)
  }

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
