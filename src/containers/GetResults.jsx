import React, { useEffect } from 'react';

const GetResults = ({ search, setSearch, token, encodedSearchInput, setResults }) => {

    useEffect(() => {
        if (search === true && token && encodedSearchInput) {     
            const getData = async () => {
                try {
                    const response = await fetch(`https://api.spotify.com/v1/search?q=${encodedSearchInput}&type=track&limit=10`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });                    
                    if (response.ok) {
                        const jsonResponse = await response.json();
                        setResults(jsonResponse.tracks.items);
                        setSearch(false);
                    } else {
                        const errorData = await response.text();
                        setSearch(false);
                        console.error('API Error:', response.status, errorData);
                        throw new Error(`Request failed: ${response.status}`);
                    }
                } catch (error) {
                    console.error('Fetch error:', error);
                        setSearch(false);
                        setResults([]);
                }
            }
            getData();

        } else {
            console.log('Conditions NOT met - no API call');
        }
    }, [search, setSearch, encodedSearchInput, token, setResults]);
    
    return null;
}

export default GetResults;