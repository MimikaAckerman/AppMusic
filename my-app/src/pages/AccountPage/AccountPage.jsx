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
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M227.346 21.72C166.6 21.42 106.33 48.002 65.633 99.272c-70.398 88.68-55.576 217.634 33.103 288.032 6.407 5.09 13.482 9.924 20.276 14.13C46.694 328.73 38.35 211.73 103.664 129.462c65.31-82.275 181.147-100.695 268.36-46.756-5.63-5.66-11.952-11.454-18.358-16.54-37.412-29.7-81.993-44.23-126.32-44.448zm40.79 68.012c-17.173-.17-34.464 4.025-50.984 13.588l.13.237-3.91 1.95c32.484 65.062 44.2 140.54 37.956 217.565-16.43-21.657-45.042-39.13-74.498-43.38-40.71-5.87-67.6 15.738-60.06 48.265 7.542 32.527 46.656 63.654 87.365 69.525 33.316 4.805 57.36-8.8 60.87-31.726h.005c8.48-53.158 9.01-106.548.57-157.475 59.49-1.135 110.173 84.413 71.965 171.062 80.733-78.593 6.76-226.6-81.28-213.508-1.872-6.79-3.92-13.516-6.144-20.176 76.357-22.337 165.25 73.996 134.405 190.856C461.34 235.536 366.66 90.718 268.137 89.732zm119.83 14.264c74.538 70.422 86.508 187.106 23.778 271.363-62.724 84.26-177.937 106.267-266.78 55.062 5.804 5.48 12.3 11.076 18.862 15.96 90.823 67.61 219.258 48.798 286.867-42.028 67.612-90.823 48.798-219.256-42.025-286.868-6.56-4.887-13.783-9.498-20.703-13.49z"></path></svg>
        </div>

        <div className="side tails">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M227.346 21.72C166.6 21.42 106.33 48.002 65.633 99.272c-70.398 88.68-55.576 217.634 33.103 288.032 6.407 5.09 13.482 9.924 20.276 14.13C46.694 328.73 38.35 211.73 103.664 129.462c65.31-82.275 181.147-100.695 268.36-46.756-5.63-5.66-11.952-11.454-18.358-16.54-37.412-29.7-81.993-44.23-126.32-44.448zm40.79 68.012c-17.173-.17-34.464 4.025-50.984 13.588l.13.237-3.91 1.95c32.484 65.062 44.2 140.54 37.956 217.565-16.43-21.657-45.042-39.13-74.498-43.38-40.71-5.87-67.6 15.738-60.06 48.265 7.542 32.527 46.656 63.654 87.365 69.525 33.316 4.805 57.36-8.8 60.87-31.726h.005c8.48-53.158 9.01-106.548.57-157.475 59.49-1.135 110.173 84.413 71.965 171.062 80.733-78.593 6.76-226.6-81.28-213.508-1.872-6.79-3.92-13.516-6.144-20.176 76.357-22.337 165.25 73.996 134.405 190.856C461.34 235.536 366.66 90.718 268.137 89.732zm119.83 14.264c74.538 70.422 86.508 187.106 23.778 271.363-62.724 84.26-177.937 106.267-266.78 55.062 5.804 5.48 12.3 11.076 18.862 15.96 90.823 67.61 219.258 48.798 286.867-42.028 67.612-90.823 48.798-219.256-42.025-286.868-6.56-4.887-13.783-9.498-20.703-13.49z"></path></svg>
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
