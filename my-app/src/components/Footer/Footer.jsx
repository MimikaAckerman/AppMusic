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
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SearchIcon from '@mui/icons-material/Search';
import Styled from 'styled-components'
//REACT ROUTER
import { Link } from "react-router-dom";
//Hook form
import { useForm } from "react-hook-form";
//function create playlist
import { addNewPlaylist } from "../../utils/addNewPlaylist";
import { useAddPlaylistContext } from "../../context/AddPlaylistContext";

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
--glow-color: rgb(217, 176, 255);
 --glow-spread-color: rgba(191, 123, 255, 0.781);
 --enhanced-glow-color: rgb(231, 206, 255);
 --btn-color: rgb(100, 61, 136);
 border: .25em solid var(--glow-color);
 padding: 1em 3em;
 color: var(--glow-color);
 font-size: 15px;
 font-weight: bold;
 background-color: var(--btn-color);
 border-radius: 1em;
 outline: none;
 box-shadow: 0 0 1em .25em var(--glow-color),
        0 0 4em 1em var(--glow-spread-color),
        inset 0 0 .75em .25em var(--glow-color);
 text-shadow: 0 0 .5em var(--glow-color);
 position: relative;
 transition: all 0.3s; 

 
 
`





export default function Footer() {
  const [value, setValue] = React.useState(0);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //creationPlaylist---------------------------------

  const { register, handleSubmit } = useForm();
const {playlist,setPlaylist} =useAddPlaylistContext()

  const onSubmit = (data) => {
     addNewPlaylist(data,playlist,setPlaylist)
  };

  return (
    <>
    <HomeButton>🏠</HomeButton>






  <Box sx={{ width: 427 }}>
      <BottomNavigation
        showLabels
        value={value}
        sx={{backgroundColor: '#5F5C57'}}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
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

              <form onSubmit={handleSubmit(onSubmit)}>
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
              </form>

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




