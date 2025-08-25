import { useEffect } from "react";

const SaveToSpotify = ({ userInput, token, playlist, save, setSave, user }) => {


    useEffect(() => {

        if (userInput && token) {
            try {
                const savePlaylist = await fetch(`https://api.spotify.com/v1/users/${user}/playlists)`
            }
        } else {
            console.log("❌ Playlist name is undefined/null/empty")
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
    })
    
    return null;
}


export default SaveToSpotify;