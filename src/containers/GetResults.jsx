import React, { useEffect } from 'react';

const GetResults = ({ search, setSearch, token, encodedSearchInput, setResults, playlist }) => {

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
                        
                        const filteredResults = jsonResponse.tracks.items.filter((result) => 
                            !playlist.some((item) => 
                                item.id === result.id
                            ));
                        
                        setResults(filteredResults);
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
            console.log('Conditions for SEARCH NOT met - no API call');
        }
    }, [search, setSearch, encodedSearchInput, token, setResults]);
    
    /*useEffect(() => {
        if (search === true) {     
            const getData = async () => {
                try {
                    const response = await fetch("/Jammming/songBase.json");                    
                    if (response.ok) {
                        const jsonResponse = await response.json();
                        setResults(jsonResponse.tracks.items);
                        setSearch(false);
                    } else {
                        setSearch(false);
                        console.log("No data fetched.")
                    }
                } catch (error) {
                    console.error('Fetch error:', error);
                        setSearch(false);
                        setResults([]);
                }
            }
            getData();

        } else {
            console.log('Conditions for SEARCH NOT met - no API call');
        }
    }, [search, token]);*/

    return null;
}

export default GetResults;