import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMusic } from "../API/FetchMusic";
import "./../assets/style/SearchContainer.css";

const SeachContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const query = searchParams.get("query") ?? "";
  const handleInput = ({ target }) => {
    const { value } = target;
    console.log(value);
    setSearchParams({ query: value });
  };
  //const URl= ["localhost1","localhost2"(..)]
  const [search, setSearch] = useState([]);
  const url = "http://localhost:8000/artists";
  useEffect(() => {
    const search = async () => {
      const data = await fetchMusic(url);
      setSearch(data);
      console.log(data);
    };
    search();
  }, [url]);

  return (
    <>
      <input
        type="text"
        value={query}
        placeholder="Search Here"
        name="filter"
        onChange={handleInput}
      />

      <div>
        {search[0]
          ?.filter((artists) => {
            if (!query) return true;
            else {
              const artistName = artists.name.toLowerCase();
              return artistName.includes(query.toLowerCase());
            }
          })
          .map((artist) => (
            <div className="box" key={artist.id}>
              <img
                className="artist__image"
                src={artist.photoUrl}
                alt={artist.name}
              />
              <div>
                <p>{artist.name}</p>
              </div>
            </div>
          ))}
      </div>
      <div></div>
    </>
  );
};

export default SeachContainer;
