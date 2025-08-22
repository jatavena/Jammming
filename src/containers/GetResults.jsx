
import React, { useEffect } from 'react';

const GetResults = ({ search, token, encodedSearchInput, setResults }) => {
    console.log('🔍 GetResults component rendered');
    console.log('Props received:', {
        search: search,
        token: token ? `${token.substring(0, 10)}...` : 'No token',
        encodedSearchInput: encodedSearchInput
    });

    useEffect(() => {
        console.log('⚡ useEffect triggered');
        console.log('Checking conditions:', {
            search: search,
            searchIsTrue: search === true,
            token: !!token,
            encodedSearchInput: encodedSearchInput
        });

        if (search === true && token && encodedSearchInput) {
            console.log('✅ All conditions met - making API call');
            console.log('URL will be:', `https://api.spotify.com/v1/search?q=${encodedSearchInput}&type=track&limit=10`);
            
            const getData = async () => {
                try {
                    console.log('🌐 Starting fetch request...');
                    const response = await fetch(`https://api.spotify.com/v1/search?q=${encodedSearchInput}&type=track&limit=10`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    
                    console.log('📡 Response status:', response.status);
                    console.log('📡 Response ok:', response.ok);
                    
                    if (response.ok) {
                        const jsonResponse = await response.json();
                        setResults(jsonResponse.tracks.items);
                        console.log('🎵 Search results:', jsonResponse);
                    } else {
                        const errorData = await response.text();
                        console.error('❌ API Error:', response.status, errorData);
                        throw new Error(`Request failed: ${response.status}`);
                    }
                } catch (error) {
                    console.error('💥 Fetch error:', error);
                }
            }
            getData();
        } else {
            console.log('❌ Conditions NOT met - no API call');
        }
    }, [search, encodedSearchInput, token, setResults]); // Fixed: added token to dependencies
    
    return null;
}

export default GetResults;