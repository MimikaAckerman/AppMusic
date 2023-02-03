import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <Btn onClick={() => loginWithRedirect()}>
    <Text><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><path d="M227.346 21.72C166.6 21.42 106.33 48.002 65.633 99.272c-70.398 88.68-55.576 217.634 33.103 288.032 6.407 5.09 13.482 9.924 20.276 14.13C46.694 328.73 38.35 211.73 103.664 129.462c65.31-82.275 181.147-100.695 268.36-46.756-5.63-5.66-11.952-11.454-18.358-16.54-37.412-29.7-81.993-44.23-126.32-44.448zm40.79 68.012c-17.173-.17-34.464 4.025-50.984 13.588l.13.237-3.91 1.95c32.484 65.062 44.2 140.54 37.956 217.565-16.43-21.657-45.042-39.13-74.498-43.38-40.71-5.87-67.6 15.738-60.06 48.265 7.542 32.527 46.656 63.654 87.365 69.525 33.316 4.805 57.36-8.8 60.87-31.726h.005c8.48-53.158 9.01-106.548.57-157.475 59.49-1.135 110.173 84.413 71.965 171.062 80.733-78.593 6.76-226.6-81.28-213.508-1.872-6.79-3.92-13.516-6.144-20.176 76.357-22.337 165.25 73.996 134.405 190.856C461.34 235.536 366.66 90.718 268.137 89.732zm119.83 14.264c74.538 70.422 86.508 187.106 23.778 271.363-62.724 84.26-177.937 106.267-266.78 55.062 5.804 5.48 12.3 11.076 18.862 15.96 90.823 67.61 219.258 48.798 286.867-42.028 67.612-90.823 48.798-219.256-42.025-286.868-6.56-4.887-13.783-9.498-20.703-13.49z"></path></svg></Text>
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