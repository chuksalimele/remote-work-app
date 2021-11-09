import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import OfficeMailDataGrid from "./OifficeMailDataGrid";
import OfficeMailSignatoryProgressList from "./OfficeMailSignatoryProgressList";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { FakeSignatoryStages } from "../../../models/fake/FakeSignatoryStages";

var signatoryStages = FakeSignatoryStages;

function SignatoryDocument({ documentType }) {
  var handleDisplayGridContent = (evt) => {
    //
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <Grid item xs={12}>
          <h2>Some component may go here or information may go here</h2>
        </Grid>
        <Grid item xs={12}>
          <ToggleButtonGroup
            color="primary"
            value={documentType}
            exclusive
            onChange={handleDisplayGridContent}
          >
            <ToggleButton value="inbox">Inbox</ToggleButton>
            <ToggleButton value="sent">Sent</ToggleButton>
            <ToggleButton value="draft">Draft</ToggleButton>
            <ToggleButton value="trash">Trash</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item xs={12}>
          {/**comppnents here are dynamically displayed. The default content is the OfficeMailGrid 
            other components such as OfficeMailSendView and OfficeMailReadView are display
            depend of what is clicked. Apart from OfficeViewGrid which is the default component
            all other component must have a back button to redirect by to the defaul component */}

          <OfficeMailDataGrid />
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <Grid item xs={12}>
          {/**comppnents here are dynamically displayed dependin on what row is click and active in he  OfficeMailGrid above*/}
          <OfficeMailSignatoryProgressList items={signatoryStages} />
        </Grid>
      </Grid>
    </Grid>
  );
}

function RegularDocument({ documentType }) {
  var handleDisplayGridContent = (evt) => {
    //
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2>Some component may go here or information may go here</h2>
      </Grid>
      <Grid item xs={8}>
        <ToggleButtonGroup
          color="primary"
          value={documentType}
          exclusive
          onChange={handleDisplayGridContent}
        >
          <ToggleButton value="inbox">Inbox</ToggleButton>
          <ToggleButton value="sent">Sent</ToggleButton>
          <ToggleButton value="draft">Draft</ToggleButton>
          <ToggleButton value="trash">Trash</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={4}>
        <p>Some component may go here</p>
      </Grid>
      <Grid item xs={12}>
        {/**comppnents here are dynamically displayed. The default content is the OfficeMailGrid 
            other components such as OfficeMailSendView and OfficeMailReadView are display
            depend of what is clicked. Apart from OfficeViewGrid which is the default component
            all other component must have a back button to redirect by to the defaul component */}

        <OfficeMailDataGrid />
      </Grid>
    </Grid>
  );
}

export default function OfficeMailViewPanel({ documentType }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {documentType === "regular" ? <RegularDocument /> : <SignatoryDocument />}
    </Box>
  );
}
