import { Stack } from "@mui/material";
import * as React from "react";

export default function CommonItem({ right, left, bottom, top, center }) {
  return (
    <Stack spacing={1} direction="column">
      <Stack>{left}</Stack>
      <Stack spacing={1} direction="column">
        <Stack spacing={1} direction="row">
          <Stack>
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
