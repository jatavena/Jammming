import React from "react";

const SearchForm = ( {handleSearch, handleSearchInput, searchInput} ) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch();
    };

    return (
        <>
        <div id="firstform">
          <form
            onSubmit={handleSubmit}
          >
            <input type="text" placeholder="type your search here" value={searchInput} onChange={handleSearchInput} ></input>
            <button type="submit" >Search Tracks</button>
          </form>
        </div>
        </>
    );
}

export default SearchForm;
