import PropTypes from "prop-types";

// @mui components
import {
  Box,
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";

// @mui icons
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const Drawer = (props) => {
  const { state, toggleDrawer } = props;

  return (
    <Box>
      <Button onClick={toggleDrawer("left", true)}>left</Button>
      <MUIDrawer
        anchor="left"
        open={state}
        onClose={toggleDrawer("left", false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer("left", false)}
          onKeyDown={toggleDrawer("left", false)}
        >
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </MUIDrawer>
    </Box>
  );
};

Drawer.propTypes = {
  state: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default Drawer;
