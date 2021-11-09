import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, ListItem, Stack, Toolbar, Tooltip } from "@mui/material";
import { RightMenuData } from "../../models/RightMenuData";
import { HomeOutlined } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { getPageUrl, invertBgColor } from "../../util/Util";
import { Link } from "react-router-dom";

var topRightMemus = RightMenuData.filter((item) => item.align === "top");
var bottomRightMemus = RightMenuData.filter((item) => item.align === "bottom");

var spacer = (
  <Box
    sx={{
      flexGrow: 1,
      flexDirection: "column",
    }}
  ></Box>
);

export default function LeftSidebar(props) {
  const theme = useTheme();
  return (
    <Stack
      height="100%"
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      width={50}
      spacing={2}
      overflow="hidden"
      sx={{ ...invertBgColor(theme) }}
    >
      {/** first add enpty Toolbar just to give space for the appbar */}
      <Toolbar variant="dense" />

      {topRightMemus.map((item) => {
        return (
          <Tooltip title={item.name} placement="left">
            <IconButton
              key={item.name}
              component={Link}
              to={getPageUrl(item.name)}
            >
              {item.icon}
            </IconButton>
          </Tooltip>
        );
      })}
      {spacer}
      {bottomRightMemus.map((item) => {
        return (
          <Tooltip title={item.name} placement="left">
            <IconButton
              size="large"
              key={item.name}
              component={Link}
              to={getPageUrl(item.name)}
            >
              {item.icon}
            </IconButton>
          </Tooltip>
        );
      })}
    </Stack>
  );
}
