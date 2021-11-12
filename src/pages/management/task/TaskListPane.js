import * as React from "react";
import Box from "@mui/material/Box";
import {
  Grid,
  Typography,
  Stack,
  Autocomplete,
  Chip,
  TextField,
} from "@mui/material";
import ManagementController from "../../../controllers/ManagementController";

var spacer = <Box sx={{ flexGrow: 1 }}></Box>;

export default function TaskListPane() {
  var handleFilter = (evt, selectedItems) => {
    //TODO
  };

  return (
    <Grid container>
      <Grid item xs={12} sx={{ m: 2 }}>
        <Stack>
          <Typography variant="h5" gutterBottom component="div">
            Task List
          </Typography>
          {spacer}

          <Autocomplete
            container
            multiple
            limitTags={7} //max. to show on the input
            size="small"
            options={["In Progress", "Over Due", "Defferred", "Completed"]}
            getOptionLabel={(opt) => opt}
            renderTags={(value, getTagProps) =>
              value.map((opt, index) => (
                <Chip
                  variant="filled"
                  label={opt}
                  size="small"
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} variant="standard" label="Filter" />
            )}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sx={{ m: 2 }}>
        {ManagementController.getTasksGrid([])}
      </Grid>
    </Grid>
  );
}
