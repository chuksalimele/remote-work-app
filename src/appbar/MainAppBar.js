import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { AccountCircle, HomeOutlined } from "@mui/icons-material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Stack } from "@mui/material";
import { getPageUrl } from "../util/Util";
import { Link } from "react-router-dom";

var spacer = <Box sx={{ flexGrow: 1 }}></Box>;

export default function MainAppBar(props) {
  const theme = useTheme();
  const handleMenuIconClick = () => {
    props.sidebarToggleHanlder();
  };

  return (
    <AppBar
      position="relative"
      sx={{
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <IconButton
          onClick={handleMenuIconClick}
          size="large"
          color="inherit"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">WorkAnywhere</Typography>
        <Tooltip title="Dashboard" placement="bottom">
          <IconButton
            color="inherit"
            size="large"
            component={Link}
            to={getPageUrl("Dashboard")}
          >
            <HomeOutlined />
          </IconButton>
        </Tooltip>

        {spacer}
        <Tooltip title="Logged in user" placement="bottom">
          <Button color="inherit" endIcon={<AccountCircle />}>
            Full Name
          </Button>
        </Tooltip>
        <Tooltip title="More actions..." placement="bottom">
          <IconButton color="inherit" size="large">
            <MoreVertOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </AppBar>
  );
}
