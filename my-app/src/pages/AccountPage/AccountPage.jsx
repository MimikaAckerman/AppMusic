import React, { useState } from "react";
import AccountPerfile from "../../components/perfileUser/AccountPerfile";
//REACT ROUTER
import { Link } from "react-router-dom";
//STYLED COMPONENT

import styled, { createGlobalStyle } from "styled-components";
//material ui for modal
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

//MY FAVORITE SONGS 

import { getItem, setItem } from '../../services/LocalStorageFuncs';
import { CiCircleRemove } from 'react-icons/ci'


const AccountPage = () => {
  //CLOUDINARY
  const [image, setImage] = useState("");
  /*   const { playlist, setPlaylist } = useAddPlaylistContext(); */
  /* console.log(playlist); */

  //auth0 -> sacar la imagen y el nombre del usuario
  /*   const { user } = useAuth0(); */
  /* console.log(user); */

  //creamos una constante que haga un filtrado de las playlist y que estas sean igual al usuario que las ha creado
  /*  const myPlaylist = playlist.filter((pl) => pl.emailUser === user.email); */

  /*  console.log(myPlaylist); */

  //modal form
  const [open, setOpen] = React.useState(false);


  return (
    <>
        <GlobalStyle />
      <FondoDesing>
        {/*boton de regreso a la homePage*/}
        <BottonBack>
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
        </BottonBack>

        
      

        <Bag >
        <div className="coin">
        <div className="side heads">
          {/*simbolo del euro frontal*/}
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.464,6c1.43,0,2.779,0.613,3.799,1.726l1.475-1.352C17.334,4.843,15.461,4,13.464,4c-1.998,0-3.87,0.843-5.272,2.375 C7.491,7.139,6.951,8.031,6.589,9H4v2h2.114c-0.038,0.33-0.064,0.663-0.064,1s0.026,0.67,0.064,1H4v2h2.589 c0.362,0.97,0.901,1.861,1.603,2.626C9.594,19.157,11.466,20,13.464,20c1.997,0,3.87-0.843,5.273-2.374l-1.475-1.352 C16.243,17.387,14.894,18,13.464,18s-2.778-0.612-3.798-1.726C9.316,15.893,9.041,15.457,8.801,15H13v-2H8.139 c-0.05-0.328-0.089-0.66-0.089-1s0.039-0.672,0.089-1H13V9H8.801c0.24-0.457,0.516-0.893,0.865-1.274 C10.686,6.613,12.034,6,13.464,6z"></path>
          </svg>
        </div>

        <div className="side tails">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.464,6c1.43,0,2.779,0.613,3.799,1.726l1.475-1.352C17.334,4.843,15.461,4,13.464,4c-1.998,0-3.87,0.843-5.272,2.375 C7.491,7.139,6.951,8.031,6.589,9H4v2h2.114c-0.038,0.33-0.064,0.663-0.064,1s0.026,0.67,0.064,1H4v2h2.589 c0.362,0.97,0.901,1.861,1.603,2.626C9.594,19.157,11.466,20,13.464,20c1.997,0,3.87-0.843,5.273-2.374l-1.475-1.352 C16.243,17.387,14.894,18,13.464,18s-2.778-0.612-3.798-1.726C9.316,15.893,9.041,15.457,8.801,15H13v-2H8.139 c-0.05-0.328-0.089-0.66-0.089-1s0.039-0.672,0.089-1H13V9H8.801c0.24-0.457,0.516-0.893,0.865-1.274 C10.686,6.613,12.034,6,13.464,6z"></path>
          </svg>
        </div>
      </div>

        </Bag>
       





        {/*Component con la funcion de playlist*/}
        <AccountPerfile />
      </FondoDesing>
      
    </>
  );
};

export default AccountPage;

//STYLED COMPONENT----------------------
const GlobalStyle = createGlobalStyle`
body{
  color: ${(props) => (props.blackColor ? "black" : "black")};
   background-color: #F1ECE7;
   color: #2f3132;
    font-size: 18px ;
    font-weight: 1000 ;
    font-family: 'Rokkitt', serif;
  }
`;
//modal for setting and bag
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  /*   border: '2px solid #000', */
  boxShadow: 24,
  p: 4,
};

const BottonBack = styled.button`
  margin-top:1rem ;
  color: #090909;
  padding: 0.2em 1.2em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  &:hover {
    border: 1px solid white;
  }
  &:active {
    box-shadow: 4px 4px 12px #c5c5c5, -4px -4px 12px #ffffff;
  }
`;

const Bag = styled.div`
  position: absolute;
  margin-top: 22rem;
  margin-left: 11.5rem;
`;

const FondoDesing = styled.div`


  background-color: #114358;
  height: 25.5rem; 
`;
