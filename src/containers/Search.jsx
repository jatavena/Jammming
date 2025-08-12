import React, { useState } from 'react';

const Search = ( {setResults} ) => {
        /*
        useEffect(() => {
          const getData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/albums');
                if (response.ok) {
                    const jsonResponse = await response.json();
                    setResults(JSON.parse(jsonResponse));
                }
                throw new Error('Request failed!');
            } catch (error) {
                console.log(error);
            }
          }
        }, [setResults])
        */
        useEffect(() => {
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
    
          setResults(dummy);
        }, [setResults]);
    
        return null;
};

export default Search;