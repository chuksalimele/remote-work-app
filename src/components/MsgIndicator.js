import { Done, DoneAll } from "@mui/icons-material";
import { green, grey, red } from "@mui/material/colors";
import * as React from "react";
import ErrorOutlineSharp from "@mui/icons-material/ErrorOutlineSharp";
import HourglassEmptySharp from "@mui/icons-material/HourglassEmptySharp";

export default function MsgIndicator({ status }) {
  var size = 6;
  return status === "seen" ? (
    <DoneAll color={green[500]} sx={{ fontSize: size }} />
  ) : status === "delivered" ? (
    <DoneAll color={grey[500]} sx={{ fontSize: size }} />
  ) : status === "sent" ? (
    <Done color={grey[400]} sx={{ fontSize: size }} />
  ) : status === "failed" || status === "error" ? (
    <ErrorOutlineSharp color={red[300]} sx={{ fontSize: size }} />
  ) : (
    <HourglassEmptySharp color={grey[300]} sx={{ fontSize: size }} />
  );
}
