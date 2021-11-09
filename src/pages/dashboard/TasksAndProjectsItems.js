import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { Divider, Link, Typography } from "@mui/material";
import { getPageUrl } from "../../util/Util";
import BoardItem from "../../components/BoardItem";
import { Link as RouterLink } from "react-router-dom";
import CommonItem from "../../components/CommonItem";
import EventIcon from "@mui/icons-material/Event";
import AlarmIcon from "@mui/icons-material/Alarm";

var recentTasks = [];
var recentProjects = [];

export default function TasksAndProjectsItems(props) {
  return (
    <BoardItem
      header="Recend Task and Projects"
      contentRenderer={() => (
        <div>
          <BoardItem
            items={recentTasks}
            maxShowItems={props.number}
            showSeeMorePath={getPageUrl("Tasks")}
            showSeeMoreLabel="Show Tasks"
            headerRenderer={() => (
              <Typography variant="subtite2" component="div">
                Tasks
              </Typography>
            )}
            itemRenderer={(item) => {
              {
                /** item.url is the path to display the details of the particularr task */
              }
              return (
                <Link component={RouterLink} to={item.url}>
                  {item.name}
                  {/** task name */}
                </Link>
              );
            }}
          />
          <BoardItem
            items={recentProjects}
            maxShowItems={props.number}
            showSeeMorePath={getPageUrl("Proects")}
            showSeeMoreLabel="Show Projects"
            headerRenderer={() => (
              <Typography variant="subtite2" component="div">
                Projects
              </Typography>
            )}
            itemRenderer={(item) => {
              {
                /** item.url is the path to display the details of the particularr project */
              }
              return (
                <Link component={RouterLink} to={item.url}>
                  {item.name}
                  {/** project name */}
                </Link>
              );
            }}
          />
        </div>
      )}
      {...props}
    />
  );
}
