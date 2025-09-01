import React from 'react';

const QueryResults = ({ TrackComponent, results, handleAdd }) => {
  console.log('QueryResults - TrackComponent:', TrackComponent);
  console.log('QueryResults - results:', results);
  
  if (!results || results.length === 0) {
    return (
      <>
        <div className="containerHeader forResults">
          <h2>Search Results</h2>
        </div>
        <div id="resultContainer">

        </div>
        <div className="containerFooter forResults">
          <p>🎵</p>
        </div>
      </>
    );
  }

  const Component = TrackComponent;  
  return (
    <>
      <div className="containerHeader forResults">
        <h2>Search Results</h2>
      </div>
      <div id="resultContainer">
        <Component results={results} handleAdd={handleAdd} />
      </div>
      <div className="containerFooter forResults">
        <p>🎵</p>
      </div>
    </>
  );
};

export default QueryResults;