import React, { useState } from "react";

function ListingCard({listing, handleDelPass}) {
  const [isFavorited, setIsFavorited] = useState(true)

  function handleFavoriteClick() {
    setIsFavorited(isFavorited => !isFavorited)
  }

  function handleDelClick(listingToDel) {
    handleDelPass(listingToDel)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorited === true ? (
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={() => handleDelClick(listing)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
