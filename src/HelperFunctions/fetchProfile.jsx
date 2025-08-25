async function fetchProfile(token, setUser) {
    console.log("Fetching Profile data...");
    const resultProfile = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", 
        headers: { Authorization: `Bearer ${token}` }
    });

    if (!resultProfile.ok) {
        throw new Error(`Profile fetch failed: ${resultProfile.status}`);
    }
    const profileData = await resultProfile.json();
    console.log("Setting user ID");
    setUser(profileData.id);
}

export default fetchProfile;