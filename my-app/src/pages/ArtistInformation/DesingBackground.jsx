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
        <ImgBackG
        src={art.photoUrl}
        alt={art.name}
        />
        </ImgContainer>
      </div>
    ))}
    
    </>
  )
}

const ImgContainer = styled.div`
  margin-left: 30%;
  opacity: 0.4;
  z-index: -1;


@media (max-width:840px){
   margin-left:10px ;
   width: 80%;
   height: 60%;
  }

`

const ImgBackG = styled.img`
  width: 390px;
  height: 840px;

  @media (max-width:840px){
   width: 400px;
   height: 680px;
   margin-left: -10px;
  }
`