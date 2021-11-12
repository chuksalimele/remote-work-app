import * as React from "react";
import Grid from "@mui/material/Grid";
import ChatSidebar from "./ChatSidebar";
import ChatViewPanel from "./ChatViewPane";

export default function ChatPane() {
  return (
    <Grid container spacing={2} sx={{ height: "100%" }}>
      <Grid item xs={4}>
        <ChatSidebar />
      </Grid>
      <Grid item xs={8} sx={{ height: "80%" }}>
        <ChatViewPanel />
      </Grid>
    </Grid>
  );
}
