import * as React from "react";
import { Stack, Link, Typography } from "@mui/material";
import { getPageUrl } from "../../util/Util";
import BoardItem from "../../components/BoardItem";
import { Link as RouterLink } from "react-router-dom";
import { FakeManagement } from "../../models/fake/FakeManagement";

var recentTasks = FakeManagement.getProjects(20); //TODO - TESTING WITH FAKE FOR NOW
var recentProjects = FakeManagement.getTasks(20); //TODO - TESTING WITH FAKE FOR NOW

export default function TasksAndProjectsItems(props) {
  return (
    <BoardItem
      header="Recend Task and Projects"
      contentRenderer={() => (
        <Stack spacing={2}>
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
              /** item.url is the path to display the details of the particularr task */

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
            showSeeMorePath={getPageUrl("Projects")}
            showSeeMoreLabel="Show Projects"
            headerRenderer={() => (
              <Typography variant="subtite2" component="div">
                Projects
              </Typography>
            )}
            itemRenderer={(item) => {
              /** item.url is the path to display the details of the particularr project */

              return (
                <Link component={RouterLink} to={item.url}>
                  {item.name}
                  {/** project name */}
                </Link>
              );
            }}
          />
        </Stack>
      )}
      {...props}
    />
  );
}
