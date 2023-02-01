import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

export const NavBarTop = () => {
  const { user } = useAuth0();

  return (
    <>
      <NavBarTopStyle>
        <NavBarName>Hi! {user.name}🎧</NavBarName>
      </NavBarTopStyle>
    </>
  );
};

const NavBarName = styled.h1`
  text-align: right;
  font-size: 30px;
  margin: 10px;
  padding: 10px;
  @media (max-width: 840px) {
    font-size: 24px;
    margin: 5px;
    margin-right: -5px;
    padding: 30px;
  }
`;

const NavBarTopStyle = styled.div`
  width: 100%;
  height: auto;
  margin: 0 5px;
  line-height: 80px;
`;