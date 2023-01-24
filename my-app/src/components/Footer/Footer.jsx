import "./Footer.css";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";



import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position:'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




export default function Footer() {
  const [value, setValue] = React.useState(0);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);





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
<BottomNavigationAction label="Favorites" icon={<PlaylistAddCheckIcon/>} />
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
<input type="text" placeholder="enter name playlist" />
<input type="text" placeholder="enter description playlist" />
<input type="image"  placeholder="enter image for your playlist"/>



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
