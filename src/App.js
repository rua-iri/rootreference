import React from 'react';
import axios from 'axios';
import './App.css';
import DictionaryResult from "./components/DictionaryResult";


function App() {

  const [lisanData, setLisanData] = React.useState({});
  const [hansData, setHansData] = React.useState({});
  const [laneData, setLaneData] = React.useState({});

  // get the query parameters to use for the api
  const queryParameters = new URLSearchParams(window.location.search);
  let rootWord = queryParameters.get("q");

  // if root is only two letters then its last letter 
  // should be doubled e.g. قل => قلل 
  if(rootWord && rootWord.length===2) {
    rootWord = rootWord + rootWord[1];
  }


  const apiUrl = "https://isd5kzb9si.execute-api.us-east-1.amazonaws.com/dictionarylookup?root=" + rootWord;

  function checkDictionary() {
    axios.get(apiUrl).then((response) => {
      setLisanData(response.data.lisanData.Item);
      setHansData(response.data.hansData);
      setLaneData(response.data.lanesData);
    })
  }

  React.useState(() => {
    checkDictionary();
  }, [])


  // TODO create search box to appear if no query parameters are given
  // TODO add error message to indicate that no results were found

  // TODO the border radius around the top edges looks off

  return (
    <div className="App gimmie-outline">
      <div className='arab-text gimmie-outline' id='root-section'>
        {rootWord}
      </div>

      <div className='break-segment gimmie-outline'></div>


      <div id='dict-container'>
        <DictionaryResult entryData={hansData} dictTitle="Hans Wehr" />
      </div>

      <div id='dict-container'>
        <DictionaryResult entryData={laneData} dictTitle="Lane's Lexicon" />
      </div>

      <div id='dict-container'>
        <DictionaryResult entryData={lisanData} dictTitle="Lisan AlArab" />
      </div>
    </div>
  );
}

export default App;
