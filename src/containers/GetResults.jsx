import React, { useEffect, useState } from 'react';

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
    
    return null;
}

export default GetResults;
