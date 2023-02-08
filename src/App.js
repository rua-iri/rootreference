import React from 'react';
import './App.css';



function App() {

  // get the query parameters to use for the api
  const queryParameters = new URLSearchParams(window.location.search)

  console.log(queryParameters.get("q"))


  // TODO query api for the root
  // then use the results returned create new DictionaryResult elements

  // TODO create search box to appear if no query parameters are given


  return (
    <div className="App">
      Arabic Root Reference
      <br />
      {queryParameters.get("q")}
    </div>
  );
}

export default App;
