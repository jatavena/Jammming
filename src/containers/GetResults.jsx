import React, { useEffect, useState } from 'react';

const dummy = {
  "1": {
    "name": "Cryptids ate my neighbour",
    "year": "2025"
  },
  "2": {
    "name": "Wildflowers of the Moon",
    "year": "1969"
  },
  "3": {
    "name": "The Game is pretty much rigged",
    "year": "3000 BC"
  },
  "4": {
    "name": "Sheeesh, just let me sleep!",
    "year": "1981"
  }
}


const GetResults = ( {search, setResults} ) => {
    
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
    

    /*useEffect(() => {
      if (search === true) {
      setResults(dummy);
      setSearch(false);
    }
    }, [search]);*/
    
    return null;
}

export default GetResults;
