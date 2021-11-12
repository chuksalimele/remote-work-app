import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { channels } from "../../../models/channels";
import {
  Assignment,
  Category,
  Contacts,
  Groups,
  GroupWork,
  Settings,
} from "@mui/icons-material";
import { Divider, IconButton } from "@mui/material";
import { avatarBgColor } from "../../../util/Util";

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  width: "90%",
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "var(--tree-view-color)",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props) {
  const { bgColor, color, labelIcon, labelInfo, labelText, ...other } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 0.5,
            pr: 0,
          }}
        >
          <Box color="inherit" sx={{ mr: 1 }}>
            {labelIcon}
          </Box>

          <Typography
            variant="body2"
            sx={{ fontWeight: "inherit", flexGrow: 1 }}
          >
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

function Hash() {
  return <div>#</div>;
}

export default function ChatSidebar() {
  return (
    <Stack spacing={1}>
      <Stack direction="row" spacing={1}>
        <Typography
          sx={{ flexGrow: 1, mt: 1, mb: 0 }}
          variant="subtitle1"
          component="div"
        >
          Channels
        </Typography>
        <IconButton sx={{ mt: 1, mb: 0 }}>
          <Settings />
        </IconButton>
      </Stack>

      <Divider />

      <TreeView
        aria-label="gmail"
        defaultExpanded={["3"]}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
        sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
      >
        {channels.map((channel, index) => {
          var channelIcon =
            channel.name === "Departments" ? (
              <Category />
            ) : channel.name === "Projects" ? (
              <GroupWork />
            ) : channel.name === "Tasks" ? (
              <Assignment />
            ) : channel.name === "Workgroups" ? (
              <Groups />
            ) : channel.name === "Contacts" ? (
              <Contacts />
            ) : (
              <Hash />
            ); //for user defined channel just use #
          return (
            <StyledTreeItem
              key={`channel${index}`}
              nodeId={`channel${index}`}
              labelText={channel.name}
              labelIcon={channelIcon}
              labelInfo={channel.items.length + ""}
            >
              {channel.items.map((item, n) => {
                var comp = null;
                if (channel.name === "Contacts") {
                  comp = (
                    <Avatar
                      sx={{ bgcolor: avatarBgColor(item.firstName) }}
                      src={item.photoUrl}
                    >
                      {item.firstName[0].toUpperCase()}
                    </Avatar>
                  );
                }

                return (
                  <StyledTreeItem
                    key={`item${n}`}
                    nodeId={`item${n}`}
                    labelText={item.name}
                    labelIcon={comp}
                    labelInfo=""
                    color="#1a73e8"
                    bgColor="#e8f0fe"
                  />
                );
              })}
              {channel.name === "Contacts" ? (
                <Button sx={{ width: "100%" }}>Invite team mates</Button>
              ) : null}
            </StyledTreeItem>
          );
        })}
      </TreeView>
    </Stack>
  );
}
