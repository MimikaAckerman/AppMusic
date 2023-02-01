import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
export const NavBarMenu = () => {
  return (
    <>
      <SideBarMenuLeft>
        <NavMenuLeft>
          <NavUlMenuLeft>
            <NavLiMenuLeft>
              <Link>
                <NavPMenuLeft>
                  <MenuIcon>
                    <HomeIcon fontSize="small" />
                  </MenuIcon>
                  Homepage
                </NavPMenuLeft>
              </Link>
            </NavLiMenuLeft>

            <NavLiMenuLeft>
              <Link>
                <NavPMenuLeft>
                  <MenuIcon>
                    <SearchIcon fontSize="small" />
                  </MenuIcon>
                  SEARCH
                </NavPMenuLeft>
              </Link>
            </NavLiMenuLeft>

            <NavLiMenuLeft>
              <Link>
                <NavPMenuLeft>ADD PLAYLIST</NavPMenuLeft>
              </Link>
            </NavLiMenuLeft>

            <NavLiMenuLeft>
              <Link>
                <NavPMenuLeft>MY PLAYLIST</NavPMenuLeft>
              </Link>
            </NavLiMenuLeft>

            <NavLiMenuLeft>
              <Link>
                <NavPMenuLeft>MY PROFILE</NavPMenuLeft>
              </Link>
            </NavLiMenuLeft>
          </NavUlMenuLeft>
        </NavMenuLeft>
      </SideBarMenuLeft>
    </>
  );
};
const MenuIcon = styled.div`
  position: fixed;
  margin: 5px;
`;
const SideBarMenuLeft = styled.div`
  margin-top: -30px;
  position: fixed;
  display: list-item;
  width: 25%;
  height: 100vh;
  background: #c9c6c4;
  font-size: 0.65em;
  @media (max-width: 840px) {
    display: none;
  }
`;
const NavMenuLeft = styled.nav`
  position: relative;
  margin: 0 15%;
  text-align: right;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
`;

const NavUlMenuLeft = styled.ul`
  list-style: none;
`;

const NavLiMenuLeft = styled.li`
  position: relative;
  margin: 3.2em 0;
`;
const NavPMenuLeft = styled.h3`
  line-height: 5em;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.2em;
  color: rgba(#fff, 0.35);
  display: block;
  transition: all ease-out 300ms;
  &.active a {
    color: white;
  }
  &:not(.active)::after {
    opacity: 0.2;
  }

  &:not(.active):hover a {
    color: rgba(#fff, 0.75);
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.2em;
    background: black;
    left: 0;
    bottom: 0;
  }
`;
