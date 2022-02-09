import React from "react";
import Search from "./Search";

function Header({ handleSearchValPass }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearchValPass={handleSearchValPass}/>
    </header>
  );
}

export default Header;
