import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Searchbar1 = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (e) => setValue(e.target.value);

  useEffect(() => {
    if (value.length > 1) {
      fetch(`http://localhost:4000/search?name=${value}`)
        .then((response) => response.json())
        .then((responseData) => {
          const result = responseData.data;

          console.log(result);
          let searchQuery = value.toLowerCase();

          for (const key in result) {
            let songs = result[key].name.toLowerCase();
            if (
              songs.slice(0, searchQuery.length).indexOf(searchQuery) !== -1
            ) {
              setResult((prevResult) => {
                return [...prevResult, result[key].name];
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
        placeholder="Search...🔍"
        type="text"
        onChange={handleChange}
        value={value}
      />
      <div>
        {result.map((item, index, thumbnail) => (
          <Link
            style={{ textDecoration: "none" }}
            key={index}
            to={`/MySongsPage/${item}`}
          >
            <SearchButton>{item}</SearchButton>
          </Link>
        ))}
      </div>
    </Search>
  );
};
export default Searchbar1;

//STYLED COMPONENT

const Search = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  margin: 100px;
`;
const InputSearch = styled.input`
  font-size: 1.2rem;
  background-color: #d8d6d7;
  border: none;
  color: black;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  width: 20em;
  transition: all ease-in-out 0.5s;

  &:hover,
  &:focus {
    box-shadow: 0 0 1em #c2c1c6;
  }
  &:focus {
    outline: none;
    background-color: #f0eeee;
  }
  &::-webkit-input-placeholder {
    font-weight: 100;
    color: #ccc;
  }
`;
const SearchButton = styled.button`
  border-radius: 0.2cm;
  margin-bottom: 10px;
  border: none;
  display: grid;
  background-color: #f4f2f2;
  margin-top: 2em;
  &:hover {
    cursor: pointer;
  }
`;
