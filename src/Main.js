import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import LeftSidebar from "./sidebars/lhs/LeftSidebar";
import RightSidebar from "./sidebars/rhs/RightSidebar";
import MainAppBar from "./appbar/MainAppBar";
import LeftSidebarMini from "./sidebars/lhs/LeftSidebarMini";
import Collapse from "@mui/material/Collapse";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { pageRoutes } from "./models/PageRoutes";
import { Divider, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

function PageContentPane() {
  const handleGoBack = (evt) => {};

  const handleGoForward = (evt) => {};

  return (
    <Switch>
      {pageRoutes.map((route) => (
        <Route key={route.name} exact path={route.url}>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6" component="div">
              {route.name}
            </Typography>

            <Tooltip title="Previous content" placement="bottom">
              <IconButton color="inherit" size="small" onClick={handleGoBack}>
                <ArrowBack />
              </IconButton>
            </Tooltip>

            <Tooltip title="Next content" placement="bottom">
              <IconButton
                color="inherit"
                size="small"
                onClick={handleGoForward}
              >
                <ArrowForward />
              </IconButton>
            </Tooltip>
          </Stack>

          <Divider sx={{ mt: 0.5, mb: 0.5 }} />
          {route.component}
        </Route>
      ))}
    </Switch>
  );
}

export default function Main(prop) {
  const [sidebarToggle, setSidebarToggle] = React.useState(false);

  const handleSidebarToggle = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const getSidebarWidth = () => {
    return sidebarToggle ? 100 : 240;
  };

  return (
    <Router>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Collapse orientation="horizontal" in={sidebarToggle} collapsedSize={0}>
          <LeftSidebarMini />
        </Collapse>

        <Collapse
          orientation="horizontal"
          in={!sidebarToggle}
          collapsedSize={0}
        >
          <LeftSidebar />
        </Collapse>

        <Stack direction="column" sx={{ display: "flex", flexGrow: 1 }}>
          <MainAppBar
            sidebarToggleHanlder={handleSidebarToggle}
            offset={getSidebarWidth()}
          />
          <Stack direction="row" sx={{ flexGrow: 1 }}>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                overflow: "hidden",
                height: `calc(100vh - 45px)`,
                pt: 0,
                pb: 2,
                pl: 2,
                pr: 2,
              }}
            >
              <PageContentPane />
            </Box>
            <RightSidebar />
          </Stack>
        </Stack>
      </Stack>
    </Router>
  );
}
