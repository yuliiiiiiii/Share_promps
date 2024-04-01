"use client";
import { SearchManufacturer } from ".";
import { useState } from "react";
import SearchButton from "./SearchButton";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');

  const handleSearch = () => {

  }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
         manufacturer={manufacturer}
         setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden"/>

      </div>
    </form>
  )
}

export default SearchBar