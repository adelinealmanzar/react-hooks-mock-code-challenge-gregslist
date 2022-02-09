import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(listingsF => setListings(listingsF))
  }, [])

  function handleDelPass(listingToDel) {
    fetch(`http://localhost:6001/listings/${listingToDel.id}`, {
      method: 'DELETE'
    })
    const deletedListingsArr = listings.filter(listing => listing.id !== listingToDel.id)
    setListings(deletedListingsArr)
  }

  const sortedListingsArr = [...listings].sort( (a, b) => {
  if (a.location.toLowerCase() < b.location.toLowerCase()) {
    return -1
  } else if (a.location.toLowerCase() > b.location.toLowerCase()) {
    return 1
  }
  return 0
  })

  function handleSearchValPass(searchVal) {
    if (isClicked) {
      [...listings].filter(listing => listing.description.toLowerCase().startsWith(searchVal))
      .sort((a,b) => a.location < b.location ? -1 : 1)
    } else {
      [...listings].filter(listing => listing.description.toLowerCase().startsWith(searchVal))
    }
  }

  // function handleSortPass() {
  //   if (isClicked) {
  //     return sortedListingsArr
  //   } else {
  //     return listings
  //   }
  // } 
  // // handle the search after sorting
  // function handleSearchValPass(searchVal) {
  //   if (handleSortPass() === sortedListingsArr) {
  //     const filteredListingsArr = sortedListingsArr.filter(listing => listing.description.startsWith(searchVal))
  //     setListings(filteredListingsArr)
  //   } else {
  //     const filteredListingsArr = [...listings].filter(listing => listing.description.startsWith(searchVal))
  //     setListings(filteredListingsArr)
  //   }
  // }

  return (
    <div className="app">
      {/* search bar parent */}
      <Header handleSearchValPass={handleSearchValPass} setIsClicked={setIsClicked}/>
      {/* card parent, whatever function returns is the prop value passed down to child */}
      <ListingsContainer listings={handleSortPass() ? handleSortPass() : listings} handleDelPass={handleDelPass}/>
    </div>
  );
}

export default App;

/*
(kind of) I can sort the listings alphabetically by location.
I can create a new listing by submitting a form, and persist the changes to the backend.
*/
