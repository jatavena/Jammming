import React, { useEffect, } from 'react';

const Search = ( {search, setResults} ) => {
    
    useEffect(() => {
      if (search === true) {
      const getData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            if (response.ok) {
                const jsonResponse = await response.json();
                setResults(jsonResponse);
            } else {
            throw new Error('Request failed!');
            }
        } catch (error) {
            console.log(error);
        }
      }
      getData();
    }
    }, [search, setResults]);
    
    return null;

      /*  if (!token) {
      console.log("Token missing!");
      return null;
    }
  
    console.log("Checking if search is TRUE...")
    useEffect(() => {
      console.log("useEffect fired with search:", search, "encoded:", encodedSearchInput);
      if (search) {
        console.log("Search TRUE, starting fetch...");
        const getData = async () => {
          try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=${encodedSearchInput}&type=track&limit=10`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            if (response.ok) {
              const jsonResponse = await response.json();
              console.log(jsonResponse);
            } else {
              throw new Error('Request failed!');
            }
          } catch (error) {
            console.log(error);
          }
        }
        setSearch(false);
        getData();
        }
      }, [search, setResults, encodedSearchInput]);
    return null;*/
}

export default Search;