import PropTypes from "prop-types";

// @mui components
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";

// @mui icons
import BugReportIcon from "@mui/icons-material/BugReport";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const ActionMenu = (props) => {
  const { visible, anchor, handleClose, who } = props;
  return (
    <Menu anchorEl={anchor} open={visible} onClose={handleClose}>
      <Link
        underline="none"
        href={`https://github.com/inmersoft-dev/inmersoft-docs-api/issues/new?labels=enhancement&title=Cambio para ${who}&body=Quisiera sugerir que en ${who}`}
        target="_blank"
        rel="noopener"
        onClick={handleClose}
      >
        <MenuItem>
          <ListItemIcon>
            <BugReportIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sugerir cambio</ListItemText>
        </MenuItem>
      </Link>
      <Link
        underline="none"
        href={`https://github.com/inmersoft-dev/inmersoft-docs-api/issues/new?labels=enhancement&title=Error en ${who}&body=He encontrado un error en ${who}`}
        target="_blank"
        rel="noopener"
        onClick={handleClose}
      >
        <MenuItem>
          <ListItemIcon>
            <AutoAwesomeIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText>Reportar bug</ListItemText>
        </MenuItem>
      </Link>
    </Menu>
  );
};

ActionMenu.propTypes = {
  visible: PropTypes.bool.isRequired,
  anchor: PropTypes.any.isRequired,
  handleClose: PropTypes.func.isRequired,
  who: PropTypes.string.isRequired,
};

export default ActionMenu;
