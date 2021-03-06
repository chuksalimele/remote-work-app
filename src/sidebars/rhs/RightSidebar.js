import * as React from "react";
import Box from "@mui/material/Box";
import { IconButton, Stack, Toolbar, Tooltip } from "@mui/material";
import { RightMenuData } from "../../models/RightMenuData";
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

export default React.forwardRef((props, ref) => {
  const theme = useTheme();
  return (
    <Stack
      ref={ref}
      height="100%"
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      width={50}
      spacing={2}
      overflow="hidden"
      sx={{ ...invertBgColor(theme) }}
    >
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
});
