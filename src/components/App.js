import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(listingsF => setListings(listingsF))
  }, [])

  function handleSearchValPass(searchVal) {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(listingsF => {
      const filteredListingsArr = listingsF.filter(listing => listing.description.startsWith(searchVal))
      setListings(filteredListingsArr)
    })
  }

  function handleDelPass(listingToDel) {
    fetch(`http://localhost:6001/listings/${listingToDel.id}`, {
      method: 'DELETE'
    })
    const deletedListingsArr = listings.filter(listing => listing.id !== listingToDel.id)
    setListings(deletedListingsArr)
  }

  return (
    <div className="app">
      {/* search bar parent */}
      <Header handleSearchValPass={handleSearchValPass}/>
      {/* card parent */}
      <ListingsContainer listings={listings} handleDelPass={handleDelPass}/>
    </div>
  );
}

export default App;

/*
done (1) When the app starts, I can see all listings.
done (2) I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence.
done (3) I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend.
done (4) I can search for listings by their description.
*/
