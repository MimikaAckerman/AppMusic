import Searchbar1 from "../../components/SearchBar/Searchbar1";
import { Link } from "react-router-dom";
const SearchPage = () => {
  return (
    <>
      <button>
        <Link to="/homePage">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.2"
            baseProfile="tiny"
            viewBox="0 0 24 24"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 9.059v-2.559c0-.256-.098-.512-.293-.708-.195-.195-.451-.292-.707-.292s-.512.097-.707.292l-6.293 6.208 6.293 6.207c.195.195.451.293.707.293s.512-.098.707-.293.293-.452.293-.707v-2.489c2.75.068 5.755.566 8 3.989v-1c0-4.633-3.5-8.443-8-8.941z"></path>
          </svg>
        </Link>
      </button>
      <Searchbar1 />
    </>
  );
};
export default SearchPage;
