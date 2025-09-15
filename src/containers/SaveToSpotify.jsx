import { useEffect } from "react";

const SaveToSpotify = ({ saveName, token, playlist, save, setSave, user, setListSaved }) => {


    useEffect(() => {
        if (save && saveName && token) {
            const savePlaylist = async () => {
                try {
                    const saveResponse = await fetch(`https://api.spotify.com/v1/users/${user}/playlists`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                            },
                        body: JSON.stringify({
                            name: saveName,
                            public: false
                        })
                    })
                    if (saveResponse.ok) {
                        const jsonSaveResponse = await saveResponse.json();
                        const playlistId = jsonSaveResponse.id;
                        console.log(jsonSaveResponse);

                        if (playlist) {
                            const playlistBody = playlist.filter((track) => track.uri).map(track => track.uri);
                            console.log("✅ RAW PLAYLIST BODY");
                            console.log(playlistBody);
                            const addSongsToPlaylist = async () => {
                                try {
                                    const addResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                                        method: 'POST',
                                        headers: {
                                            'Authorization': `Bearer ${token}`,
                                            'Content-Type': 'application/json'
                                            },
                                        body: JSON.stringify({
                                            'uris': playlistBody
                                        })
                                    })
                                    if (addResponse.ok) {
                                        const jsonAddResponse = await addResponse.json();
                                        console.log("Tracks added successfully:", jsonAddResponse);
                                    } else {
                                        throw new Error('Add Request failed!');
                                    }
                                } catch (Error) {
                                    const errorData = await addResponse.text();
                                    console.error('API Error:', addResponse.status, errorData);
                                    throw new Error(`Request failed: ${addResponse.status}`);
                                }
                            }

                            await addSongsToPlaylist();

                        } else {
                            console.log("Playlist is undefined/null/empty");
                        }
                    } else {
                        throw new Error('Request failed!');
                    }
                } catch (Error) {
                    const errorData = await saveResponse.text();
                    console.error('API Error:', saveResponse.status, errorData);
                    throw new Error(`Request failed: ${saveResponse.status}`);
                }
            }
            savePlaylist();
            setSave(false);
            setListSaved(true);
            
        } else if (saveName === "") {
            console.log("Playlist name is undefined/null/empty");
        } else if (token === "") {
            console.log("issing token");
        } else {
            console.log("Save state failure!");
        } 
    }, [save, saveName])
    
    return null;
}


export default SaveToSpotify;