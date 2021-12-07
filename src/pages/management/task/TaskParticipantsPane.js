import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UserList from "../../../components/UserList";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import fakeComments from "../../../models/fake/FakeComments";
import Loader from "../../../components/Loader";
import { Suspense } from "react";
import ErrorBoundary from "../../../components/ErrorBoundary";

import CommentsView from "../../../components/CommentsView.js";
/*const CommentsView = React.lazy(() =>
  import("../../../components/CommentsView")
);*/

import MessageEditor from "../../../components/MessageEditor";
/*const MessageEditor = React.lazy(() =>
  import("../../../components/MessageEditor")
);*/

var participants = []; //TODO

function ParticipantsSelect() {
  const [category, setCategory] = React.useState("all");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
        <InputLabel id="simple-select-standard-label">Showing</InputLabel>
        <Select
          labelId="simple-select-standard-label"
          id="simple-select-standard"
          value={category}
          onChange={handleChange}
          label="Showing"
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value={"owner"}>Owner</MenuItem>
          <MenuItem value={"assignees"}>Assignees</MenuItem>
          <MenuItem value={"followers"}>Followers</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

function ParticipantsPane() {
  return (
    <Stack spacing={1}>
      <ParticipantsSelect />
      <UserList
        users={participants}
        hasDivider={true}
        renderSecondaryAction={(user) => {
          return <MenuIcon />;
        }}
      />
    </Stack>
  );
}

function ParticipantsCommentPane() {
  var comments = fakeComments(60); //TODO - TESTING WITH FAKE FOR NOW

  return (
    <Stack
      spacing={0}
      sx={{
        width: "100%",
        height: "400px",
        overflow: "hidden",
      }}
    >
      {/**
      <div
        style={{
          backgroundColor: "blue",
          width: "100%",
          overflowY: "auto",
        }}
      >
        START testing1 testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing END
      </div> */}
      <CommentsView
        comments={comments}
        sx={{ height: "100%", overflowY: "auto" }}
      />

      <MessageEditor />
    </Stack>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ height: `100%`, width: "100%", overflow: "hidden" }}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TaskParticipantsPane() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        m: 2,
        width: "400px",
        overflow: "hidden",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Participants" {...a11yProps(0)} />
          <Tab label="Comments" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ParticipantsPane />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ParticipantsCommentPane />
      </TabPanel>
    </Box>
  );
}
