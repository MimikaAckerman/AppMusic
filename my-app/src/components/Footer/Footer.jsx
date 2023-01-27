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

export default function Footer() {
  const [value, setValue] = React.useState(0);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /*   const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen); */

  //creationPlaylist---------------------------------

  const { register, handleSubmit } = useForm();
  const { playlist, setPlaylist } = useAddPlaylistContext();

  const onSubmit = (data) => {
    addNewPlaylist(data, playlist, setPlaylist);
  };

  return (
    <>
      <HomeButton>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          height="2em"
          width="2.2em"
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
            stroke-width="0"
            viewBox="0 0 24 24"
            height="2em"
            width="2.2em"
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
          stroke-width="0"
          viewBox="0 0 24 24"
          height="2em"
          width="2.2em"
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

      <Profile>
        <Link to="/AccountPage">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="2em"
            width="2.2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
          </svg>
        </Link>
      </Profile>
    </>
  );
}

//STYLED COMPONENT

const HomeButton = styled.button`
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
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

const SearchButton = styled.button`
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
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
const CreatePlaylist = styled.button`
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
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
  font-size: 18px;
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
