import { useEffect, useState, useCallback } from "react";

// @mui components
import { IconButton } from "@mui/material";

// @mui icon
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

// utils
import { scrollTo } from "../../utils/functions";

const ToTop = () => {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(
    (e) => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      if (top > 100) setVisible(true);
      else setVisible(false);
    },
    [setVisible]
  );

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <IconButton
      onClick={scrollTo}
      color="primary"
      sx={{
        transform: visible ? "scale(1)" : "scale(0)",
        zIndex: visible ? 23 : -1,
        position: "fixed",
        bottom: "10px",
        right: "10px",
        transition: "all 500ms ease",
      }}
    >
      <ArrowDropDownCircleIcon
        fontSize="large"
        sx={{ transform: "rotateX(180deg)" }}
      />
    </IconButton>
  );
};

export default ToTop;
