import { useState, useEffect } from 'react'
import './App.css'

import GetResults from './containers/GetResults.jsx';
import { handleSpotifyCallback } from './containers/HandleSpotifyCallback.jsx';

import PlaylistControl from './presentation/PlaylistControl.jsx';
import PlayList from './presentation/Playlist.jsx';
import QueryResults from './presentation/QueryResults.jsx';
import SearchForm from './presentation/SearchForm.jsx';
import Track from './presentation/Track.jsx';
import LoginForm from './presentation/LoginForm.jsx';

import Search from './containers/Search.jsx';

function App() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState(false);
  const [playlist, setPlayList ] = useState([]);
  const [userInput, setUserInput] = useState('Your Playlist');
  const [isEditing, setIsEditing] = useState(false);
  const [code, setCode] = useState(false);
  const [token, setToken] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [encodedSearchInput, setEncodedSearchInput] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {

      handleSpotifyCallback().then(data => {
        if (data.access_token) {
          setToken(data.access_token);
          setCode(true);
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      });
    }
  }, []);
  
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    setEncodedSearchInput(encodeURIComponent(searchInput));
  }
  
  const handleSearch = () => {
    setSearch(true);
  };
  
  const handleAdd = (itemToAdd) => {
    if (!playlist.find(item => item.id === itemToAdd.id)) {
      setPlayList(prev => [...prev, itemToAdd]);
    }
  };

  const handleRemove = (itemToRemove) => {
    console.log("Removed");
    setPlayList((playlist) => playlist.filter((listItem) => listItem.id !== itemToRemove));
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
  
  return (
    <>
      { !token ? <LoginForm /> : <SearchForm handleSearch={handleSearch} searchInput={searchInput} handleSearchInput={handleSearchInput} />}
      <div style={
        {'display': 'flex',
          'alignItems': 'flexStart',
          'justifyContent': 'space-evenly',
          'gap': 40
        }
      }
      > 
        <div>
          <p>You will search: https://api.spotify.com/v1/search?q={encodedSearchInput}&type=track&limit=10</p>
          <p>The header is: `Bearer {token}`</p>
          <GetResults setResults={setResults} search={search} setSearch={setSearch} />
          <QueryResults results={results} TrackComponent={Track} handleAdd={handleAdd} />
        </div>
        <div>
          <PlaylistControl playlist={playlist} handleInput={handleInput} userInput={userInput} isEditing={isEditing} handleOnBlur={handleOnBlur} handleClick={handleClick} />
          <PlayList playlist={playlist} handleRemove={handleRemove} handleInput={handleInput} userInput={userInput} isEditing={isEditing} handleOnBlur={handleOnBlur} handleClick={handleClick} />
        </div>
      </div>

    </>
  )
}

export default App;
