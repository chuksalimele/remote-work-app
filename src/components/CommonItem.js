import { Stack } from "@mui/material";
import * as React from "react";

export default function CommonItem({
  className,
  sx,
  ref,
  right,
  left,
  bottom,
  top,
  center,
}) {
  return (
    <Stack
      spacing={1}
      direction="row"
      className={className ? className : {}}
      sx={sx ? sx : {}}
      ref={ref ? ref : null}
    >
      <Stack>{left}</Stack>
      <Stack spacing={1} direction="column">
        <Stack spacing={1} direction="row">
          <Stack direction="column">
            {top}
            {center}
          </Stack>
          <Stack>{right}</Stack>
        </Stack>
        <Stack>{bottom}</Stack>
      </Stack>
    </Stack>
  );
}
