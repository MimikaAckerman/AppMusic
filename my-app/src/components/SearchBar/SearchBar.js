import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
    <Search>
      <InputSearch
        type="text"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <div className="searchBack">
        {result.map((result, index) => (
          <SearchButton>
            <Link href="#" key={index}>
              <div className="searchEntry">{result}</div>
            </Link>
        
          </SearchButton>
        ))}
      </div>
    </Search>
  );
}
export default SearchBar;

const Search = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5rem;
  margin-top: 1rem;

`
const InputSearch = styled.input`
  font-size: 1.2rem;
  background-color: #D8D6D7;
  border: none;
  color: black;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  width: 20em;
  transition: all ease-in-out .5s;

  

  &:hover , &:focus{
    box-shadow: 0 0 1em #C2C1C6;
  }
  &:focus{
    outline: none;
  background-color: #f0eeee;
  }
  &::-webkit-input-placeholder{
    font-weight: 100;
  color: #ccc;
  }
  


`
const SearchButton = styled.button`
border: none;
  background-color: #f4f2f2;
  margin-top: .1em;
  &:hover{
    cursor: pointer;
  }

`