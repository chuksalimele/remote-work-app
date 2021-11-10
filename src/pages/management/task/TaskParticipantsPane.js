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
import { Grid, Stack, Autocomplete, Chip, TextField } from "@mui/material";
import CommentSection from "../../../components/CommentsView";

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
    <Box sx={{ width: "100%" }} sx={{ m: 2 }}>
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
        <CommentSection />
      </TabPanel>
    </Box>
  );
}
