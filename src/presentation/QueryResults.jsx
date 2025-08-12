import React from 'react';

const QueryResults = ({ TrackComponent, results, handleAdd }) => {
  console.log('QueryResults - TrackComponent:', TrackComponent);
  console.log('QueryResults - results:', results);
  
  if (!results || results.length === 0) {
    return (
      <>
        <h2>Search Results</h2>
        <p>Search for music to see results here.</p>
      </>
    );
  }

  const Component = TrackComponent;  
  return (
    <>
      <h2>Search Results</h2>
      <Component results={results} handleAdd={handleAdd} />
    </>
  );
};

export default QueryResults;