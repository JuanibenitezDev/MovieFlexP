import { useState } from "react";

import "./App.css";

import { SearchBar } from "./components/Searchbar.js";
import SearchResultList from "./components/SearchResultsList.js";
import { Outlet } from "react-router-dom";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <div className="containerNav">
          <SearchBar setResults={setResults} />
        </div>
        <SearchResultList results={results} />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
