import React from 'react'
import useFetchApi from '../../API/useFetchApi';
import { useParams } from "react-router-dom";
import styled from 'styled-components';

export const DesingBackground = () => {
    let { name } = useParams();
    const {artists} = useFetchApi();
    const artistsDesing = artists.filter((art) => art.name === name);
  return (
    <>
     {artistsDesing.map((art,_id) =>(
      <div key={art._id}>
       
       <ImgContainer>
        <img 
        src={art.photoUrl} 
        alt={art.name} 
        style={{ width: 390, height: 840 }}
        />
        </ImgContainer>
      </div>
    ))}
    
    </>
  )
}

const ImgContainer = styled.div`
opacity: 0.4;
z-index: -1;
`