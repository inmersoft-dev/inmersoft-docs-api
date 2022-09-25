import { useState } from "react";

import PropTypes from "prop-types";

// @mui components
import { Button, Link } from "@mui/material";

// @mui icons
import LinkIcon from "@mui/icons-material/Link";

const LinkButton = (props) => {
  const { link } = props;

  const [show, setShow] = useState(false);

  return (
    <Link underline="none" href={link}>
      <Button
        sx={{
          width: "30px",
          height: "15px",
          minWidth: 0,
          minHeight: 0,
          padding: "10px",
          marginLeft: "20px",
        }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        type="button"
      >
        {show && <LinkIcon />}
      </Button>
    </Link>
  );
};

LinkButton.propTypes = {
  link: PropTypes.string.isRequired,
};

export default LinkButton;
