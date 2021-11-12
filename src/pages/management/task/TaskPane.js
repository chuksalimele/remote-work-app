import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import SplitButtonExt from "../../../components/SplitButtonExt";
import TaskParticipantsPane from "./TaskParticipantsPane";
import TaskListPane from "./TaskListPane";
import MenuExt from "../../../components/MenuExt";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: 0,
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

var ON_GOING = "on_going";
var I_AM_ASSIGNED_TO = "I_AM_ASSIGNED_TO";
var I_AM_FOLLOWING = "I_AM_FOLLOWING";
var CREATED_BY_ME = "CREATED_BY_ME";

var spacer = <Box sx={{ flexGrow: 1 }}></Box>;

function TaskToolbar() {
  var [anchor, setAnchor] = React.useState(null);
  var [flag, setFlag] = React.useState(false);
  const handleClickMoreMenu = (evt) => {
    setAnchor(evt.currentTarget);
    setFlag(!flag); //toggle the flag
  };

  const handleChange = (evt) => {
    //
  };
  return (
    <Toolbar variant="dense">
      <StyledToggleButtonGroup
        size="small"
        color="primary"
        value={ON_GOING}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value={ON_GOING}>On going</ToggleButton>
        <ToggleButton value={I_AM_ASSIGNED_TO}>I'm Assigned To</ToggleButton>
        <ToggleButton value={I_AM_FOLLOWING}>I'm Following</ToggleButton>
        <ToggleButton value={CREATED_BY_ME}>Created By Me</ToggleButton>
      </StyledToggleButtonGroup>
      {spacer}
      <SplitButtonExt
        variant="contained"
        items={["Create Task", "Create From Template"]}
      />
      {spacer}

      <Button onClick={handleClickMoreMenu}>
        More <ArrowDropDownIcon />
      </Button>
      <MenuExt
        flag={flag}
        anchor={anchor}
        items={["Reports", "Templates", "Deleted Tasks", "My Task History"]}
        marginBottom="5px"
        anchorVertical="bottom"
        anchorHorizontal="right"
        menuVertical="top"
        menuHorizontal="right"
        arrowDirection="up"
      />
    </Toolbar>
  );
}

export default function TaskPane() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <TaskToolbar />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TaskListPane />
        </Grid>
        <Grid item xs={4}>
          <TaskParticipantsPane />
        </Grid>
      </Grid>
    </Box>
  );
}
