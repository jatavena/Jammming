import { useState, useEffect } from 'react'
import './App.css'

import GetResults from './containers/GetResults.jsx';
import SaveToSpotify from './containers/SaveToSpotify.jsx';
import { handleSpotifyCallback } from './containers/HandleSpotifyCallback.jsx';

import fetchProfile from './HelperFunctions/fetchProfile.jsx';

import PlaylistControl from './presentation/PlaylistControl.jsx';
import PlayList from './presentation/Playlist.jsx';
import QueryResults from './presentation/QueryResults.jsx';
import SearchForm from './presentation/SearchForm.jsx';
import Track from './presentation/Track.jsx';
import LoginForm from './presentation/LoginForm.jsx';

function App() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState(false);
  const [playlist, setPlaylist ] = useState([]);
  const [userInput, setUserInput] = useState('Your Playlist');
  const [isEditing, setIsEditing] = useState(false);
  const [code, setCode] = useState(false);
  const [token, setToken] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [encodedSearchInput, setEncodedSearchInput] = useState('');
  const [user, setUser] = useState('');
  const [save, setSave] = useState(false);
  const [saveName, setSaveName] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      handleSpotifyCallback().then(data => {
        if (data.access_token) {
          setToken(data.access_token);
          setCode(true);
          fetchProfile(data.access_token, setUser);
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      });      
    }
  }, []);
  
  const handleSearchInput = (e) => {
    const value = (e.target.value);
    setSearchInput(value);
  }
  
  const handleSearch = () => {
    setEncodedSearchInput(encodeURIComponent(searchInput));
    setSearch(true);
  };
  
  const handleAdd = (itemToAdd) => {
    if (!playlist.find(item => item.id === itemToAdd.id)) {
      setPlaylist(prev => [...prev, itemToAdd]);
    }
  };

  const handleRemove = (itemToRemove) => {
    console.log("Removed");
    setPlaylist((playlist) => playlist.filter((listItem) => listItem.id !== itemToRemove));
  };

  const handleInput = (e) => {
    setIsEditing(true);
    setUserInput(e.target.value);
  }

  const handleClick = () => {
    setIsEditing(true);
  }

  const handleOnBlur = () => {
    if (userInput !== '') {
      setIsEditing(false);
    }
  }

  const handleSave = () => {
    setSaveName(userInput);
    setSave(true);
  }
  
  return (
    <>
      { !token ? <LoginForm /> : <SearchForm handleSearch={handleSearch} searchInput={searchInput} handleSearchInput={handleSearchInput} />}
      <p>You are logged in as: {user}</p>
      <div style={
        {'display': 'flex',
          'alignItems': 'flexStart',
          'justifyContent': 'space-evenly',
          'gap': 40
        }
      }
      > 
        <div>
          <GetResults search={search} setSearch={setSearch} encodedSearchInput={encodedSearchInput} token={token} setResults={setResults} />
          <QueryResults results={results} TrackComponent={Track} handleAdd={handleAdd} />
        </div>
        <div>
          <PlaylistControl playlist={playlist} handleInput={handleInput} userInput={userInput} isEditing={isEditing} handleOnBlur={handleOnBlur} handleClick={handleClick} handleSave={handleSave} />
          <SaveToSpotify saveName={saveName} token={token} playlist={playlist} save={save} setSave={setSave} user={user} />
          <PlayList playlist={playlist} handleRemove={handleRemove} handleInput={handleInput} userInput={userInput} isEditing={isEditing} handleOnBlur={handleOnBlur} handleClick={handleClick} />
        </div>
      </div>

    </>
  )
}

export default App;
