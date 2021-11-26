import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { getPageUrl, invertBgColor } from "../util/Util";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/material";

const createArrowCsssProps = (
  bgcoolor,
  vert,
  horz,
  direction,
  size,
  offset /** TODO - offset from the edge */
) => {
  if (!direction) return {};

  var DEFAULT_SIZE = 10;
  size = size || DEFAULT_SIZE;

  var obj = {
    content: '""',
    display: "block",
    position: "absolute",
    width: size,
    height: size,
    bgcolor: bgcoolor ? bgcoolor : "background.paper",
    transform: "translateY(50%) rotate(45deg)",
    zIndex: 0,
  };

  if (direction === "top" || direction === "up") {
    obj.top = -size;
    if (vert === "left" || horz === "left") {
      obj.left = Math.floor(size / 2);
    }
    if (vert === "right" || horz === "right") {
      obj.right = Math.floor(size / 2);
    }
  } else if (direction === "bottom" || direction === "down") {
    obj.bottom = 0;
    if (vert === "left" || horz === "left") {
      obj.left = Math.floor(size / 2);
    }
    if (vert === "right" || horz === "right") {
      obj.right = Math.floor(size / 2);
    }
  } else if (direction === "left") {
    obj.left = -Math.floor(size / 2);
    if (vert === "top" || horz === "top") {
      obj.top = 0;
    }
    if (vert === "bottom" || horz === "bottom") {
      obj.bottom = size;
    }
  } else if (direction === "right") {
    obj.right = -Math.floor(size / 2);
    if (vert === "top" || horz === "top") {
      obj.top = 0;
    }
    if (vert === "bottom" || horz === "bottom") {
      obj.bottom = size;
    }
  }

  return obj;
};

export default function MenuExt({
  inverse,
  flag,
  anchor,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  anchorVertical,
  anchorHorizontal,
  menuVertical,
  menuHorizontal,
  arrowDirection,
  arrowSize,
  arrowOffset,
  items,
}) {
  const theme = useTheme();
  var invertColor = {};
  if (inverse) {
    invertColor = invertBgColor(theme);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  React.useEffect(() => {
    setAnchorEl(anchor);
  }, [anchor, flag]); //watch changes of the flag

  const handleClose = () => {
    setAnchorEl(null);
  };

  const arrowProps = createArrowCsssProps(
    invertColor.bgcolor,
    menuVertical,
    menuHorizontal,
    arrowDirection,
    arrowSize,
    arrowOffset
  );

  return (
    <Menu
      anchorEl={anchorEl}
      open={anchorEl ? true : false}
      anchorOrigin={{
        vertical: anchorVertical,
        horizontal: anchorHorizontal,
      }}
      transformOrigin={{
        vertical: menuVertical,
        horizontal: menuHorizontal,
      }}
      onClose={(evt) => handleClose(evt)}
      onClick={(evt) => handleClose(evt)}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: marginTop,
          ml: marginLeft,
          mr: marginRight,
          mb: marginBottom,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": arrowProps,
          ...invertColor,
        },
      }}
    >
      {items.map((item) => {
        return (
          <MenuItem
            key={item.name ? item.name : item}
            component={Link}
            to={getPageUrl(item.name ? item.name : item)}
          >
            <Stack direction="row" spacing={2}>
              <Stack>{item.icon ? item.icon : null}</Stack>
              <Stack>{item.name ? item.name : item}</Stack>
            </Stack>

            {item.divider && <Divider />}
          </MenuItem>
        );
      })}
    </Menu>
  );
}
