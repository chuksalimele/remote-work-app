import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Stack } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import { Done, Restore } from "@mui/icons-material";
import Masonry from "@mui/lab/Masonry";
import {
  blue,
  lightBlue,
  indigo,
  green,
  lightGreen,
  lime,
  purple,
  deepPurple,
  red,
  pink,
  cyan,
  teal,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
} from "@mui/material/colors";

var colors = [
  { name: "blue", color: blue },
  { name: "lightBlue", color: lightBlue },
  { name: "indigo", color: indigo },
  { name: "green", color: green },
  { name: "lightGreen", color: lightGreen },
  { name: "lime", color: lime },
  { name: "purple", color: purple },
  { name: "deepPurple", color: deepPurple },
  { name: "red", color: red },
  { name: "pink", color: pink },
  { name: "cyan", color: cyan },
  { name: "teal", color: teal },
  { name: "yellow", color: yellow },
  { name: "amber", color: amber },
  { name: "orange", color: orange },
  { name: "deepOrange", color: deepOrange },
  { name: "brown", color: brown },
  { name: "grey", color: grey },
  { name: "blueGrey", color: blueGrey },
];

function ColorChooseGroup() {
  const [colorShade, setColorShade] = React.useState(900);

  const handleChangeColorShade = (event) => {
    setColorShade(event.target.value);
  };

  return (
    <Stack spacing={1}>
      <Typography variant="subtitle2" component="div">
        {"Theme Color"}
      </Typography>
      <Masonry column={3} spacing={0}>
        {colors.map((color) => {
          return (
            <Button
              variant="contained"
              sx={{ m: 0, bgcolor: color.color[900], borderRadius: 0 }}
            >
              {color.name}
            </Button>
          );
        })}
      </Masonry>
      <Stack direction="row">
        <FormControl variant="standard" sx={{ maxWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Color Shade
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={colorShade}
            onChange={handleChangeColorShade}
            label="Color Shade"
          >
            <MenuItem value={900}>900</MenuItem>
            <MenuItem value={800}>800</MenuItem>
            <MenuItem value={700}>700</MenuItem>
            <MenuItem value={600}>600</MenuItem>
            <MenuItem value={500}>500</MenuItem>
            <MenuItem value={400}>400</MenuItem>
            <MenuItem value={300}>300</MenuItem>
            <MenuItem value={200}>200</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
          <Box sx={{ width: "100px", height: "30px", bgcolor: "brown" }}>
            {"Overview"}
          </Box>
        </FormControl>
      </Stack>
    </Stack>
  );
}

export default function AppearanceSettingsPane() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Stack direction="row" spacing={3} sx={{ flexGrow: 1 }}>
        <Stack spacing={3}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Theme Mode</FormLabel>
            <RadioGroup
              row
              aria-label="theme-mode"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Light"
              />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel
                value="mixed"
                control={<Radio />}
                label="Mixed"
              />
            </RadioGroup>
          </FormControl>
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Dense size"
            />
            <FormControlLabel control={<Switch />} label="Ripple effect" />
          </FormGroup>
        </Stack>
        <Stack spacing={3} sx={{ flexGrow: 1 }}>
          <ColorChooseGroup />
        </Stack>
        <Stack spacing={3} sx={{ flexGrow: 1 }}>
          <Button variant="contained" endIcon={<Done />}>
            Apply
          </Button>
          <Button variant="contained" color="secondary" endIcon={<Restore />}>
            Reset
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
