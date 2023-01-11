import "./Footer.css";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

export default function Footer() {
  const [value, setValue] = React.useState(0);

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
        <Link to="/ListPage">
          <BottomNavigationAction
            label="Playlist"
            icon={<PlaylistPlayIcon />}
          />
        </Link>
        <Link to="/AccountPage">
          <BottomNavigationAction label="Acount" icon={<PersonIcon />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
}
