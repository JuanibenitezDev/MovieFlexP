import { SearchResult } from "./SearchResult";
import "./Searchresultslist.css";
const baseURL = "https://image.tmdb.org/t/p/original/";

export const SearchResultList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result) => {
        return (
          <SearchResult
            key={result.id}
            id={result.id}
            result={result.title}
            imagen={`${baseURL}${result.poster_path}`}
          />
        );
      })}
    </div>
  );
};

export default SearchResultList;
