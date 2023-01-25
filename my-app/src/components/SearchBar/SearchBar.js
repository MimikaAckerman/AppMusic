import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/* function SearchBar() {
  const url = "http://localhost:4000/artists";
  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
      } catch (error) {}
    };
  });
} */

function SearchBar(props) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  // onChange quitar useEffect y poner la funcion = sin el
  useEffect(() => {
    if (value.length > 0) {
      fetch(
        "https://music-app-7b84d-default-rtdb.europe-west1.firebasedatabase.app/playlists.json"
      )
        .then((response) => response.json())
        .then((responseData) => {
          setResult([]);
          let searchQuery = value.toLowerCase();
          for (const key in responseData) {
            let songs = responseData[key].name.toLowerCase();
            if (
              songs.slice(0, searchQuery.length).indexOf(searchQuery) !== -1
            ) {
              setResult((prevResult) => {
                return [...prevResult, responseData[key].name];
              });
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setResult([]);
    }
  }, [value]);

  return (
    <div>
      <p className="titleText">Song Search</p>
      <input
        type="text"
        className="searchBar"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <div className="searchBack">
        {result.map((result, index) => (
          <button>
            <Link href="#" key={index}>
              <div className="searchEntry">{result}</div>
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
}
export default SearchBar;
