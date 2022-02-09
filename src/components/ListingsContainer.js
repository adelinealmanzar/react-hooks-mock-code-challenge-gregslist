import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDelPass }) {
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => <ListingCard key={listing.description} listing={listing} handleDelPass={handleDelPass}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
