import * as React from "react";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { userFullName } from "../../../util/Util";

var users = []; //TODO

function CopyMailInput({ label }) {
  return (
    <Autocomplete
      multiple
      limitTags={7} //max. to show on the input
      size="small"
      options={users}
      freeSolo
      getOptionLabel={(user) => userFullName(user, false)}
      renderTags={(value, getTagProps) =>
        value.map((user, index) => (
          <Chip
            avatar={
              <Avatar src={user.photoUrl}>
                {user.firstName[0].toUpperCase()}
              </Avatar>
            }
            variant="outlined"
            label={userFullName(user, false)}
            size="small"
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <TextField {...params} variant="standard" label={label} />
      )}
    />
  );
}

export default function OfficeMailCreateView() {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Stack spacing={1}>
        <CopyMailInput label="Cc" />
      </Stack>
      <Stack spacing={1}>
        <CopyMailInput label="Cc" />
      </Stack>
    </Stack>
  );
}
