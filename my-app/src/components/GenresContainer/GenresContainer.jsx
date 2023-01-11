import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchApi from "../../API/useFetchApi";
import './Genres.css'


const GenresContainer = () => {
  const {genres} = useFetchApi();


  return (
    <>
      <div>
        <div>
          <h2>Música por Género</h2>
        </div>
     
          <div className="Btn_container">
            {genres.map((genre) => (
              <div key={genre.id}>
                <Link to={"/GenresPage"}>
                  <button className="Btn-genre">{genre.name}</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
     
    </>
  );
};

export default GenresContainer;
