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
};

export default function Footer() {
  const [value, setValue] = React.useState(0);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //creationPlaylist---------------------------------

  const { register, handleSubmit } = useForm();



const {playlist,setPlaylist} =useAddPlaylistContext()

  const onSubmit = (data) => {
    console.log(playlist)
     addNewPlaylist(data,playlist,setPlaylist) 

/*     setPlaylist([...playlist,data])
 */  
        console.log(data); 
  };

  return (
    <Box sx={{ width: 427 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to="/">
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </Link>
        <Link to="/LikeSongs">
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </Link>

        {/* CREATE PLAYLIST --------------------------*/}

        <Button onClick={handleOpen}>
          <BottomNavigationAction
            label="Favorites"
            icon={<PlaylistAddCheckIcon />}
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
                <input
                  {...register("description", {
                    message: "the description is necessary",
                  })}
                  type="text"
                  placeholder="enter description playlist"
                />

                <input type="submit" value="create playlist" />
              </form>
            </Typography>
          </Box>
        </Modal>

        {/* 

        <Link to="/ListPage">
          <BottomNavigationAction
            label="Playlist"
            icon={<PlaylistPlayIcon />}
          />
        </Link>
 */}

        <Link to="/AccountPage">
          <BottomNavigationAction label="Account" icon={<PersonIcon />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
}
