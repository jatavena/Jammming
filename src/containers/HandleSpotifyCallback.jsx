export async function handleSpotifyCallback() {
  const clientId = "ec7fe00bdec6414f98e858b395175584";
  const redirectUri = "https://jatavena.github.io/Jammming/";

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");

  if (!code) return null; 

  const codeVerifier = localStorage.getItem("code_verifier");

  const payload = new URLSearchParams({
    client_id: clientId,
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri,
    code_verifier: codeVerifier,
  });

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: payload,
  });

  const data = await response.json();
  if (data.access_token) {
    localStorage.setItem("access_token", data.access_token);
    console.log("Access token saatu:", data.access_token);
  } else {
    console.error("Token fetch epäonnistui:", data);
  }

  return data;
}
