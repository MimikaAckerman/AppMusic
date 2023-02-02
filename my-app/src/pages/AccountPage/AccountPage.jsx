import React, { useState } from "react";
import AccountPerfile from "../../components/perfileUser/AccountPerfile";
//REACT ROUTER
import { Link } from "react-router-dom";
//STYLED COMPONENT
import styled, { createGlobalStyle } from "styled-components";




const AccountPage = () => {
  //CLOUDINARY
  const [image, setImage] = useState("");

  return (
    <>
    <GlobalStyle />
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

      {/*boton de ajustes*/}
      <BtnSetting>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="2em"
          width="2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
        </svg>
      </BtnSetting>

      <Card>
        <AccountPerfile />
      </Card>

      {/* moneda*/}

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

const Card = styled.div`
  width: 250px;
  height: 260px;
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  margin-top: 2rem;
  margin-left: 4rem;
  position: absolute;
`;

const BtnSetting = styled.button`
  margin-top: 1rem;
  margin-left: 12rem;
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

const BottonBack = styled.button`
  margin-top: 1rem;
  margin-left: 1rem;
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
