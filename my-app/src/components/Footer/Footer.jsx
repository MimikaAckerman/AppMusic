import * as React from "react";
//material ui------------------
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import SearchIcon from "@mui/icons-material/Search";
import Styled from "styled-components";
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

  //creationPlaylist---------------------------------

  const { register, handleSubmit } = useForm();

  const { playlist, setPlaylist } = useAddPlaylistContext();

  const onSubmit = (data) => {
    console.log(playlist);
    addNewPlaylist(data, playlist, setPlaylist);

    /*     setPlaylist([...playlist,data])
     */
    console.log(data);
  };

  return (
    <>
<<<<<<< HEAD
      <Box sx={{ width: 427 }}>
        <BottomNavigation
          showLabels
          value={value}
          sx={{ backgroundColor: "#5F5C57" }}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
=======
    <HomeButton>
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512.1 172.6l-370 369.7h96V868H392V640c0-22.1 17.9-40 40-40h160c22.1 0 40 17.9 40 40v228h153.9V542.3H882L535.2 195.7l-23.1-23.1zm434.5 422.9c-6 6-13.1 10.8-20.8 13.9 7.7-3.2 14.8-7.9 20.8-13.9zm-887-34.7c5 30.3 31.4 53.5 63.1 53.5h.9c-31.9 0-58.9-23-64-53.5zm-.9-10.5v-1.9 1.9zm.1-2.6c.1-3.1.5-6.1 1-9.1-.6 2.9-.9 6-1 9.1z"></path><path d="M951 510c0-.1-.1-.1-.1-.2l-1.8-2.1c-.1-.1-.2-.3-.4-.4-.7-.8-1.5-1.6-2.2-2.4L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.6 63.6 0 0 0-16 26.6l-.6 2.1-.3 1.1-.3 1.2c-.2.7-.3 1.4-.4 2.1 0 .1 0 .3-.1.4-.6 3-.9 6-1 9.1v3.3c0 .5 0 1 .1 1.5 0 .5 0 .9.1 1.4 0 .5.1 1 .1 1.5 0 .6.1 1.2.2 1.8 0 .3.1.6.1.9l.3 2.5v.1c5.1 30.5 32.2 53.5 64 53.5h42.5V940h691.7V614.3h43.4c8.6 0 16.9-1.7 24.5-4.9s14.7-7.9 20.8-13.9a63.6 63.6 0 0 0 18.7-45.3c0-14.7-5-28.8-14.3-40.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg>
    </HomeButton>

    <SearchButton>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm8.485 16.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"></path></g></svg>
    </SearchButton>
    <CreatePlaylist>
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path></svg>
    </CreatePlaylist>
    <Profile>
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg>
    </Profile>






  <Box sx={{ width: 427 }}>
      <BottomNavigation
        showLabels
        value={value}
        sx={{backgroundColor: '#5F5C57'}}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
    



        <Link to="/GenresPage">
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        </Link>



        {/* CREATE PLAYLIST --------------------------*/}

        <Button onClick={handleOpen}>
          <BottomNavigationAction
            label="Favorites"
            icon={<PlaylistAddIcon />}
          />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
>>>>>>> 095a43aeea083971b681f55e2a6a1e3c023c7dcf
        >
          <Link to="/">
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          </Link>
          <Link to="/GenresPage">
            <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          </Link>
          {/* CREATE PLAYLIST --------------------------*/}

          <Button onClick={handleOpen}>
            <BottomNavigationAction
              label="Favorites"
              icon={<PlaylistAddIcon />}
            />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                create playlist
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {/*         FORM WITH CREATE PLAYLIST*/}

                <FormModal onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register("name", {
                      required: "the name is required",
                      message: "the name playlist is necessary",
                    })}
                    type="text"
                    placeholder="enter name playlist"
                  />
                  <br></br>
                  <input
                    {...register("description", {
                      message: "the description is necessary",
                    })}
                    type="text"
                    placeholder="enter description playlist"
                  />
                  <br></br>
                  <input type="submit" value="create playlist" />
                </FormModal>
              </Typography>
            </Box>
          </Modal>

          <Link to="/AccountPage">
            <BottomNavigationAction label="Account" icon={<PersonIcon />} />
          </Link>
        </BottomNavigation>
      </Box>
    </>
  );
}

const FormModal = Styled.form`
     background: #EBEBEB;
    text-align: center; 
    box-shadow: 0px 0px 20px 5px #AAA; 
    border-radius: 10px;  
    width: 45%; 
    height: 400px;
    margin: 30px auto 0 auto;
    padding: 10px 10px;  
    animation: bounce 1.5s infinite;
`;

<<<<<<< HEAD
const InputModal = Styled.input`
    background-color: #DF1B76;
    border-bottom: 5px solid #B2175F;
    color: white;
    width:300px;
`;
=======




//STYLED COMPONENT


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width:300,
};


const HomeButton = Styled.button`
--b: 3px;
   /* border thickness */
  --s: .45em;
 /* size of the corner */
  --color: RED;
  font-weight: bold;
  padding: calc(.5em + var(--s)) calc(.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background: conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .6em;
  font-size: 16px;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`
const SearchButton = Styled.button`
--b: 3px;
   /* border thickness */
  --s: .45em;
 /* size of the corner */
  --color: RED;
  font-weight: bold;
  padding: calc(.5em + var(--s)) calc(.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background: conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .6em;
  font-size: 16px;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation; 
`
const CreatePlaylist = Styled.button`
--b: 3px;
   /* border thickness */
  --s: .45em;
 /* size of the corner */
  --color: RED;
  font-weight: bold;
  padding: calc(.5em + var(--s)) calc(.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background: conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .6em;
  font-size: 16px;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation; 
`
const Profile = Styled.button`
--b: 3px;
   /* border thickness */
  --s: .45em;
 /* size of the corner */
  --color: RED;
  font-weight: bold;
  padding: calc(.5em + var(--s)) calc(.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background: conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .6em;
  font-size: 16px;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`
>>>>>>> 095a43aeea083971b681f55e2a6a1e3c023c7dcf
