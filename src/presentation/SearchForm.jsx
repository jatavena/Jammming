import React from "react";

const SearchForm = ( {handleSearch} ) => {
    return (
        <>
        <form style={{'border': 'solid 1px', 'padding': 20, 'display': 'flex', 'justifyContent': 'space-evenly'}}>
            <input type="text" placeholder="type your search here" style={{'textAlign': 'center'}}></input>
            <br />
            <button type="button" onClick={handleSearch} >Search</button>
        </form>
        </>
    );
}

export default SearchForm;