import { loginToSpotify } from '../containers/ConnectToSpotify.jsx';

const LoginForm = () => {
    return (
        <>
          <div style={{'border': 'solid 1px', 'padding': 20, 'display': 'flex', 'justifyContent': 'space-evenly'}}>
            <button type="button" onClick={loginToSpotify}>Login to Spotify</button>
          </div>
        </>
    );
}

export default LoginForm;