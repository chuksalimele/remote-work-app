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
import ErrorBoundary from "./components/ErrorBoundary";
import { Suspense } from "react";
import Loader from "./components/Loader";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function PageContentPane() {
  const handleGoBack = (evt) => {};

  const handleGoForward = (evt) => {};

  return (
    <Switch>
      {pageRoutes.map((route) => (
        <Route key={route.name} exact path={route.url}>
          <Stack
            sx={{
              display: "flex",
              height: "100%",
              width: "100%",
              overflow: "hidden",
            }}
          >
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

            <Box
              sx={{
                flexGrow: 1,
                width: "100%",
                overflow: "hidden",
              }}
            >
              <Suspense fallback={<Loader />}>{route.component}</Suspense>
            </Box>
          </Stack>
        </Route>
      ))}
    </Switch>
  );
}

export default function Main(prop) {
  console.log("main");
  const SIDE_BAR_WIDE_WIDTH = 240;
  const SIDE_BAR_MINI_WIDTH = 100;

  const [sidebarCollapsedIn, setSidebarCollapsedIn] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarCollapsedIn(!sidebarCollapsedIn);
  };

  return (
    <ErrorBoundary>
      <Router>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            flexBasis: "100vw", //which is the width in flexbox model
            height: "100vh",
            maxWidth: "100vw",
            maxHeight: "100vh",
            minWidth: "100vw",
            minHeight: "100vh",
            overflow: "hidden",
          }}
        >
          <Collapse
            orientation="horizontal"
            in={sidebarCollapsedIn}
            collapsedSize={0}
          >
            <LeftSidebarMini width={SIDE_BAR_MINI_WIDTH} />
          </Collapse>

          <Collapse
            orientation="horizontal"
            in={!sidebarCollapsedIn}
            collapsedSize={0}
          >
            <LeftSidebar width={SIDE_BAR_WIDE_WIDTH} />
          </Collapse>

          <Stack
            direction="column"
            sx={{ flexGrow: 1, height: "100%", overflow: "hidden" }}
          >
            <MainAppBar sidebarToggleHanlder={handleSidebarToggle} />
            <Stack
              direction="row"
              sx={{ flexGrow: 1, width: "100%", overflow: "hidden" }}
            >
              <Box
                component="main"
                sx={{
                  flexGrow: 0,
                  pt: 0,
                  pb: 0,
                  pl: 2,
                  pr: 2,
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <PageContentPane />
              </Box>
              <RightSidebar />
            </Stack>
          </Stack>
        </Stack>
      </Router>
    </ErrorBoundary>
  );
}
