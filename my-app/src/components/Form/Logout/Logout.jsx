import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <ButtonLogout onClick={() => logout({ returnTo: window.location.origin })}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z"
          fill="currentColor"
        ></path>
        <path
          d="M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z"
          fill="currentColor"
        ></path>
      </svg>
    </ButtonLogout>
  );
};

const ButtonLogout = styled.button`
  text-align: right;
  height: 50%;
  margin-top: 10px;
  margin-bottom: auto;
  margin-left: 1rem;
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 12px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  @media (min-width:762px){
    margin-top: 30px;
  }
  &:hover {
    border: 1px solid white;
  }
  &:active {
    box-shadow: 4px 4px 12px #c5c5c5, -4px -4px 12px #ffffff;
  }
`;
