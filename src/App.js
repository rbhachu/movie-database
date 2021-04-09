import React, { useState } from 'react'; // useState - react hooks
import axios from 'axios'; // npm package to allow us to get api, can we not use fetch statement???

import Search from './components/Search'; // import Search.js file
import Results from './components/Results'; // import Results.js file
import Popup from './components/Popup'; // import Popup.js file

function App() {

  //set initial state
  const [state, setState] = useState({
    s: "", //empty search query default value
    results: [], //empty array default value
    selected: {} //empty object default value
  });

  const apiURL = process.env.REACT_APP_OMDbAPI; // api key stored in .env file
  console.log(`api: ${apiURL}`); // show api key for testing

  const search = (e) => {
    if (e.key === "Enter") { // if key pressed after typing search value is ENTER key, then return result
      //change to work with 'Go' button too???

      //axios(process.env.OMDbAPI + "&s=" + state.s)      
      axios(apiURL + "&s=" + state.s) // query string format to pass as for api
      //axios(apiURL + "&page=1&s=" + state.s) // query string format to pass as for api
      //.then(console.log("apiURL: " + apiURL)) // console log to check if api .env is correct
      //.then((data) => {console.log(data)}) // console log to see return data from api
      .then(({ data }) => {
        let results = data.Search
        // add error catching for api here

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }

  // searchbox input
  const handleInput = (e) => {
    let s = e.target.value; //capture search query value from searcbox

    setState(prevState => { // get previous state
      return { ...prevState, s: s } // change 's' to search query value from searchbox
    });
    //console.log(state.s); //show state in console for debugging, should display search query value and update on change too
  }


// popup
  const openPopup = id => {
    axios(apiURL + "&plot=full&i=" + id).then(({ data }) => { //plot=full/short (full=full summary)/short=short summary
      let result = data;

      //console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

// page output
  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
         <Search handleInput={handleInput} search={search} />
         <Results results={state.results} openPopup={openPopup} />

         {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;