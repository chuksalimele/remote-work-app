import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListSubheader from "@mui/material/ListSubheader";
import Chip from "@mui/material/Chip";

import Avatar from "@mui/material/Avatar";
import Done from "@mui/icons-material/Done";
import Close from "@mui/icons-material/Close";
import HourglassEmptyOutlined from "@mui/icons-material/HourglassEmptyOutlined";

export default function OfficeMailSignatoryProgressList({ items }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Stage Progress
          </ListSubheader>
        }
      >
        {items.map((item, index) => (
          <ListItem
            key={index}
            alignItems="flex-start"
            secondaryAction={
              item.status === "accepted" ? (
                <Chip
                  color="success"
                  label={item.action}
                  size="small"
                  icon={<Done />}
                />
              ) : item.status === "rejected" ? (
                <Chip
                  color="warning"
                  label={item.action}
                  variant="outlined"
                  size="small"
                  icon={<Close />}
                />
              ) : (
                <Chip
                  label={item.action}
                  variant="outlined"
                  size="small"
                  icon={<HourglassEmptyOutlined />}
                />
              )
            }
          >
            <ListItemAvatar>
              <Avatar src={item.photoUrl}>
                {item.firstName[0].toUpperCase()}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={(
                item.title +
                " " +
                item.firstName +
                " " +
                item.lastName
              ).trim()}
              secondary={item.designation}
            />
            {index < items.length - 1 ? (
              <Divider variant="inset" component="li" />
            ) : null}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
