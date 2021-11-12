import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OfficeMailSidebar from "./OfficeMailSidebar";
import OfficeMailViewPanel from "./OfficeMailViewPane";

export default function OfficeMailPane() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <OfficeMailSidebar />
        </Grid>
        <Grid item xs={9}>
          <OfficeMailViewPanel />
        </Grid>
      </Grid>
    </Box>
  );
}
