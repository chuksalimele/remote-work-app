import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ChatSidebar from "./ChatSidebar";
import ChatViewPanel from "./ChatViewPane";

export default function ChatPane() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ChatSidebar />
        </Grid>
        <Grid item xs={8}>
          <ChatViewPanel />
        </Grid>
      </Grid>
    </Box>
  );
}
