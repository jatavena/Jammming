import { useState } from 'react'
import './App.css'

import GetResults from './containers/GetResults.jsx';

import PlayList from './presentation/Playlist.jsx';
import QueryResults from './presentation/QueryResults.jsx';
import SearchForm from './presentation/SearchForm.jsx';
import Track from './presentation/Track.jsx';

function App() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState(false);
  const [playlist, setPlayList ] = useState([]);
  const [userInput, setUserInput] = useState('Your Playlist');
  const [isEditing, setIsEditing] = useState(false);

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
      <SearchForm handleSearch={handleSearch} results={results} />
      <div style={
        {'display': 'flex',
          'alignItems': 'flexStart',
          'justifyContent': 'space-evenly',
          'gap': 40
        }
      }
      > 
        <div> 
          <GetResults setResults={setResults} search={search} setSearch={setSearch} />
          <QueryResults results={results} TrackComponent={Track} handleAdd={handleAdd} />
        </div>
        <div>
          <PlayList playlist={playlist} handleRemove={handleRemove} handleInput={handleInput} userInput={userInput} isEditing={isEditing} handleOnBlur={handleOnBlur} handleClick={handleClick} />
        </div>
      </div>

    </>
  )
}

export default App;
