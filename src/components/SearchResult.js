import { Link } from "react-router-dom";
import "./Searchresults.css";

export const SearchResult = ({ result, imagen, id }) => {
  return (
    <Link to={`/Movie/${id}`}>
      <div className="search-result">
        <img className="imagenSearch" src={imagen} alt=""></img>
        {result}
      </div>
    </Link>
  );
};

export default SearchResult;
