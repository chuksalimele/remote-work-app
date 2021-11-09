import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";

export default function OfficeMailSidebar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <List
        sx={{ width: 240, bgcolor: "background.paper" }}
        component="nav"
        subheader={
          <ListSubheader component="div" sx={{ padding: "2px" }}>
            {/**this button will only be enabled for admin or authorized users */}
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Add Document
            </Button>

            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                lineHeight: 3,
              }}
            >
              Signatory Documents
            </Typography>
          </ListSubheader>
        }
      >
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Request" />
        </ListItem>
      </List>
      <List
        sx={{ width: 240, bgcolor: "background.paper" }}
        component="nav"
        subheader={
          <ListSubheader component="div" sx={{ padding: "2px" }}>
            <Typography
              variant="subtitle1"
              sx={{
                lineHeight: 3,
              }}
              component="div"
            >
              Regular Documents
            </Typography>
          </ListSubheader>
        }
      >
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Memo" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Complaint" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Suggestion / Innovation" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Query" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="External Mail" />
        </ListItem>
      </List>
    </Box>
  );
}
