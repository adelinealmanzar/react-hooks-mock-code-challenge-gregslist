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

  function handleSortPass(isClicked) {
    if (isClicked) {
    fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(fetchedListings => {
        const sortedListingsArr = fetchedListings.sort( (a, b) => {
          if (a.location.toLowerCase() < b.location.toLowerCase()) {
            return -1
          } else if (a.location.toLowerCase() > b.location.toLowerCase()) {
            return 1
          }
          return 0
        })
        console.log(sortedListingsArr)
        setListings(() => sortedListingsArr)
      })
    }

  } 


  return (
    <div className="app">
      {/* search bar parent */}
      <Header handleSearchValPass={handleSearchValPass} handleSortPass={handleSortPass}/>
      {/* card parent */}
      <ListingsContainer listings={listings} handleDelPass={handleDelPass}/>
    </div>
  );
}

export default App;

/*
(kind of) I can sort the listings alphabetically by location.
I can create a new listing by submitting a form, and persist the changes to the backend.
*/
