import * as React from "react";
import { Stack, Link, Typography } from "@mui/material";
import { getPageUrl } from "../../util/Util";
import BoardItem from "../../components/BoardItem";
import { Link as RouterLink } from "react-router-dom";
import { fakeProjects, fakeTasks } from "../../models/fake/FakeManagement";

export default function TasksAndProjectsItems(props) {
  var recentTasks = fakeTasks(20); //TODO - TESTING WITH FAKE FOR NOW
  var recentProjects = fakeProjects(20); //TODO - TESTING WITH FAKE FOR NOW
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
