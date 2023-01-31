import * as React from "react";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { styled } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
import MenuList from "@mui/joy/MenuList";
import MenuItem from "@mui/joy/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlaylistContainer from "../PlaylistContainer/PlaylistContainer";
import useFetchApi from "../../API/useFetchApi";
import { List } from "@mui/material";
const Popup = styled(PopperUnstyled)({
  zIndex: 1000,
});

export default function TracksMenu() {
  const { playlist } = useFetchApi();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      setAnchorEl(null);
    } else if (event.key === "Escape") {
      anchorEl.focus();
      setAnchorEl(null);
    }
  };

  return (
    <div>
      <Button
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        color="neutral"
        onClick={handleClick}
        sx={{ borderRadius: 0 }}
      >
        <MoreHorizIcon />
      </Button>
      <Popup
        role={undefined}
        id="composition-menu"
        open={open}
        anchorEl={anchorEl}
        disablePortal
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 4],
            },
          },
        ]}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList
            variant="outlined"
            onKeyDown={handleListKeyDown}
            sx={{ boxShadow: "md", bgcolor: "background.body" }}
          >
            <MenuItem onClick={handleClose}>
              <List>
                {playlist.map((playlist) => (
                  <div key={playlist.id}>
                    <p className="title-description">{playlist.name}</p>
                  </div>
                ))}
              </List>
            </MenuItem>
          </MenuList>
        </ClickAwayListener>
      </Popup>
    </div>
  );
}
