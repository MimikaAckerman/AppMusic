import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavBarMenu = () => {


    return (
        <>
        
  <SideBarMenuLeft>
    <NavMenuLeft>
      <NavUlMenuLeft>
      <NavLiMenuLeft>
        <Link>
        <NavPMenuLeft>
          HOMEPAGE
        </NavPMenuLeft>
        </Link>
      </NavLiMenuLeft>

      <NavLiMenuLeft>
        <Link>
        <NavPMenuLeft>
          SEARCH
        </NavPMenuLeft>
        </Link>
      </NavLiMenuLeft>

      <NavLiMenuLeft>
        <Link>
        <NavPMenuLeft>
          ADD PLAYLIST
        </NavPMenuLeft>
        </Link>
      </NavLiMenuLeft>

      <NavLiMenuLeft>
        <Link>
        <NavPMenuLeft>
          MY PLAYLIST
        </NavPMenuLeft>
        </Link>
      </NavLiMenuLeft>

      <NavLiMenuLeft>
        <Link>
        <NavPMenuLeft>
          MY PROFILE
        </NavPMenuLeft>
        </Link>
      </NavLiMenuLeft>
        </NavUlMenuLeft>
      </NavMenuLeft>
  </SideBarMenuLeft>
        </>
    )


}


const SideBarMenuLeft = styled.div`
  margin-top: -30px;
  position: fixed;
  display: list-item;
  width: 25%;
  height: 100vh;
  background: #C9C6C4;
  font-size: 0.65em;
  @media (max-width: 840px){
    display: none;
  }

`
const NavMenuLeft = styled.nav`
    position: relative;
  margin: 0 15%;
  text-align: right;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
`

const NavUlMenuLeft = styled.ul`
  list-style: none;
`

const NavLiMenuLeft = styled.li`
  position: relative;
  margin: 3.2em 0;
`
const NavPMenuLeft = styled.h3`
  line-height: 5em;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.4em;
      color: rgba(#FFF, 0.35);
      display: block;
      transition: all ease-out 300ms;
      &.active a {
      color: white;
    }
    &:not(.active)::after {
      opacity: 0.2;
    }
    
    &:not(.active):hover a {
      color: rgba(#FFF, 0.75);
    }
    
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.2em;
      background: black;
      left: 0;
      bottom: 0;
      background-image: linear-gradient(to right, #5e42a6, #b74e91)
    }
`
