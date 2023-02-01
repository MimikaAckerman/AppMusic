import * as React from "react";
//material ui------------------
import Modal from "@mui/material/Modal";
import styled from "styled-components";
//REACT ROUTER
import { Link } from "react-router-dom";
//Hook form
import { useForm } from "react-hook-form";
//function create playlist
import { addNewPlaylist } from "../../utils/addNewPlaylist";
import { useAddPlaylistContext } from "../../context/AddPlaylistContext";
import { useAuth0 } from "@auth0/auth0-react";

export default function Footer() {
  const [value, setValue] = React.useState(0);

  //modal form
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /*   const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen); */

  //creationPlaylist---------------------------------

  const { register, handleSubmit } = useForm();
  const { playlist, setPlaylist } = useAddPlaylistContext();
  const { user} = useAuth0();

  const onSubmit = (data) => {

     const createPlaylist = {
      ...data,
      emailUser:user.email
    }

   addNewPlaylist(createPlaylist, playlist, setPlaylist);
 };

  return (
    <>
      <FooterDiv>

      <HomeButton>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M512.1 172.6l-370 369.7h96V868H392V640c0-22.1 17.9-40 40-40h160c22.1 0 40 17.9 40 40v228h153.9V542.3H882L535.2 195.7l-23.1-23.1zm434.5 422.9c-6 6-13.1 10.8-20.8 13.9 7.7-3.2 14.8-7.9 20.8-13.9zm-887-34.7c5 30.3 31.4 53.5 63.1 53.5h.9c-31.9 0-58.9-23-64-53.5zm-.9-10.5v-1.9 1.9zm.1-2.6c.1-3.1.5-6.1 1-9.1-.6 2.9-.9 6-1 9.1z"></path>
          <path d="M951 510c0-.1-.1-.1-.1-.2l-1.8-2.1c-.1-.1-.2-.3-.4-.4-.7-.8-1.5-1.6-2.2-2.4L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.6 63.6 0 0 0-16 26.6l-.6 2.1-.3 1.1-.3 1.2c-.2.7-.3 1.4-.4 2.1 0 .1 0 .3-.1.4-.6 3-.9 6-1 9.1v3.3c0 .5 0 1 .1 1.5 0 .5 0 .9.1 1.4 0 .5.1 1 .1 1.5 0 .6.1 1.2.2 1.8 0 .3.1.6.1.9l.3 2.5v.1c5.1 30.5 32.2 53.5 64 53.5h42.5V940h691.7V614.3h43.4c8.6 0 16.9-1.7 24.5-4.9s14.7-7.9 20.8-13.9a63.6 63.6 0 0 0 18.7-45.3c0-14.7-5-28.8-14.3-40.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
        </svg>
      </HomeButton>
      <SearchButton>
        <Link to="/GenresPage">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm8.485 16.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"></path>
            </g>
          </svg>
        </Link>
      </SearchButton>

      {/* CREATE PLAYLIST --------------------------*/}

      <CreatePlaylist onClick={handleOpen}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
        </svg>
      </CreatePlaylist>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Card>
          <TitleCreatePlaylist>Create Playlist</TitleCreatePlaylist>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm
              {...register("name", {
                required: "the name is required",
                message: "the name playlist is necessary",
              })}
              type="text"
              placeholder="Enter name playlist"
              />
            <br></br>
            <br />
            <InputForm
              {...register("description", {
                message: "the description is necessary",
              })}
              type="text"
              placeholder="Enter description playlist"
              />
            <br></br>

            <SubmitForm type="submit" value="Create Playlist" />
          </form>
        </Card>
      </Modal>

      <Mysongs>
        <Link to="/MySongsPage">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"></path>
          <path
            fillRule="evenodd"
            d="M12 3v10h-1V3h1z"
            clipRule="evenodd"
          ></path>
          <path d="M11 2.82a1 1 0 01.804-.98l3-.6A1 1 0 0116 2.22V4l-5 1V2.82z"></path>
          <path
            fillRule="evenodd"
            d="M0 11.5a.5.5 0 01.5-.5H4a.5.5 0 010 1H.5a.5.5 0 01-.5-.5zm0-4A.5.5 0 01.5 7H8a.5.5 0 010 1H.5a.5.5 0 01-.5-.5zm0-4A.5.5 0 01.5 3H8a.5.5 0 010 1H.5a.5.5 0 01-.5-.5z"
            clipRule="evenodd"
          ></path>
        </svg>
        </Link>
      </Mysongs>

      <Profile>
        <Link to="/AccountPage">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1.5 1a.5.5 0 00-.5.5v3a.5.5 0 01-1 0v-3A1.5 1.5 0 011.5 0h3a.5.5 0 010 1h-3zM11 .5a.5.5 0 01.5-.5h3A1.5 1.5 0 0116 1.5v3a.5.5 0 01-1 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 01-.5-.5zM.5 11a.5.5 0 01.5.5v3a.5.5 0 00.5.5h3a.5.5 0 010 1h-3A1.5 1.5 0 010 14.5v-3a.5.5 0 01.5-.5zm15 0a.5.5 0 01.5.5v3a1.5 1.5 0 01-1.5 1.5h-3a.5.5 0 010-1h3a.5.5 0 00.5-.5v-3a.5.5 0 01.5-.5z"
              clipRule="evenodd"
            ></path>
            <path
              fillRule="evenodd"
              d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </Profile>

    </FooterDiv>
    </>
  );
}

//STYLED COMPONENT

const FooterDiv = styled.div`
  text-align: center;
  display: none;
  @media (max-width: 428px) {
    display: list-item;
  }
`


const HomeButton = styled.button`
  color: #090909;
  padding: 0.7em 1.5em;
  font-size: 14px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  text-decoration: none;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  &:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }
`;

const SearchButton = styled.button`
  color: #090909;
  padding: 0.7em 1.5em;
  font-size: 14px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  text-decoration: none;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  &:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }
`;
const CreatePlaylist = styled.button`
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 14px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  &:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }
`;
const Profile = styled.button`
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 14px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  &:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }
`;

const Card = styled.div`
  margin-left: 3rem;
  margin-top: 10rem;
  width: 20rem;
  height: 19rem;
  border-radius: 30px;
  background: lightgrey;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;
`;
const TitleCreatePlaylist = styled.h2`
  text-align: center;
  padding: 1.5rem;
`;

const InputForm = styled.input`
  font-size: 1.2rem;
  background-color: #999999;
  border: none;
  margin-left: 1.5rem;
  color: black;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  width: 11em;
  transition: all ease-in-out 0.5s;

  &:hover,
  &:focus {
    box-shadow: 0 0 1em #c2c1c6;
  }
  &:focus {
    outline: none;
    background-color: #f0eeee;
  }
  &::-webkit-input-placeholder {
    font-weight: 100;
    color: #ccc;
  }
`;
const SubmitForm = styled.input`
  border-radius: 30px;
  font-size: 1.2rem;
  margin-left: 6rem;
  margin-top: 3rem;
`;

const Mysongs = styled.button`
color: #090909;
  padding: 0.7em 1.7em;
  font-size: 14px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  &:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }
`;
