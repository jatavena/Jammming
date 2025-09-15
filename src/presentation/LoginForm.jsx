import { loginToSpotify } from "../containers/ConnectToSpotify";

const LoginForm = () => {
    return (
        <>
          <div id="loginform">
            <button type="button" onClick={loginToSpotify} >Login to Spotify</button>
          </div>
        </>
    );
}

export default LoginForm;