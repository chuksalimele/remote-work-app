import * as React from "react";
import { userFullName } from "../util/Util";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { avatarBgColor } from "../util/Util";

export default function UserItem({
  user,
  primaryText,
  secondaryText,
  secondaryAction,
}) {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Avatar
          sx={{ bgcolor: avatarBgColor(user.firstName) }}
          src={user.photoUrl}
        >
          {user.firstName[0].toUpperCase()}
        </Avatar>
      </Grid>
      <Grid item xs={12} direction="row" container>
        <Grid item xs container zeroMinWidth>
          <Typography gutterBottom variant="subtitle1" component="div">
            {primaryText ? primaryText : userFullName(user, true)}
          </Typography>

          {secondaryText || user.designation ? (
            <Typography variant="body2" color="text.secondary">
              {secondaryText ? secondaryText : user.designation}
            </Typography>
          ) : null}
        </Grid>
        <Grid item>{secondaryAction ? secondaryAction : null}</Grid>
      </Grid>
    </Grid>
  );
}
