import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <Btn onClick={() => loginWithRedirect()}>
    <Text>Enter the Application</Text>
  </Btn>;
};

const Btn = styled.button`
width: 100px;
  height: 100px;
  background: repeating-radial-gradient(circle at 50% 50%, rgba(200,200,200,.2) 0%, rgba(200,200,200,.2) 2%, transparent 2%, transparent 3%, rgba(200,200,200,.2) 3%, transparent 3%), conic-gradient(white 0%, silver 10%, white 35%, silver 45%, white 60%, silver 70%, white 80%, silver 95%, white 100%);
  border-radius: 50%;
  box-shadow: 0 0px 20px #0005, 0 -0px 20px #fff2;
  outline: 1px solid #fff;
  outline-offset: -2px;
  transition: 1s;

  &:hover{
    transform: rotate(90deg);
  }

`
const Text = styled.span`
font-size: 15px;
  font-weight: 700;
  color: #aaa;
  text-align: center;
  text-shadow: 1px 1px 1px #fff;
`