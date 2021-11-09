import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { userFullName } from "../util/Util";

export default function UserList({
  users,
  renderPrimaryText,
  renderSecondaryText,
  renderSecondaryAction,
  hasDivider,
}) {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {users.map((user) => (
        <div>
          <ListItem
            alignItems="flex-start"
            secondaryAction={
              renderSecondaryAction ? renderSecondaryAction(user) : null
            }
          >
            <ListItemAvatar>
              <Avatar src={user.photoUrl}>
                {user.firstName[0].toUpperCase()}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                renderPrimaryText
                  ? renderPrimaryText(user)
                  : userFullName(user, true)
              }
              secondary={
                renderSecondaryText
                  ? renderSecondaryText(user)
                  : user.designation
              }
            />
          </ListItem>
          {hasDivider ? <Divider variant="inset" component="li" /> : null}
        </div>
      ))}
    </List>
  );
}
