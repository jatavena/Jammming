import { useEffect } from "react";

const SaveToSpotify = ({ saveName, token, playlist, save, setSave, user }) => {


    useEffect(() => {
        console.log(`Saving a playlist called ${saveName}`);
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
                        console.log(jsonSaveResponse);
                    } else {
                        throw new Error('Request failed!');
                    }
                } catch (Error) {
                    const errorData = await saveResponse.text();
                    setSave(false);
                    console.error('API Error:', saveResponse.status, errorData);
                    throw new Error(`Request failed: ${saveResponse.status}`);
                }
            }
            console.log("Calling savePlaylist()...");
            savePlaylist();
            console.log("Function called");
        } else if (saveName === "") {
            console.log("❌ Playlist name is undefined/null/empty");
        } else if (token === "") {
            console.log("❌ Missing token");
        } else {
            console.log("Save state failure!");
        }


        if (save) {
            console.log("🔄 SaveToSpotify rendered");
            console.log("📋 Playlist prop received:", playlist);
            console.log("📋 Playlist type:", typeof playlist);
            
            if (playlist) {
                const rawPlaylistBody = playlist.filter((track) => track.uri).map(track => track.uri);
                console.log("✅ RAW PLAYLIST BODY");
                console.log(rawPlaylistBody);
            } else {
                console.log("❌ Playlist is undefined/null/empty");
            }
            setSave(false);
        }   
    }, [save, saveName])
    
    return null;
}


export default SaveToSpotify;