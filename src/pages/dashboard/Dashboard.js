import * as React from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import TasksAndProjectsItems from "./TasksAndProjectsItems";
import RecentLinksItems from "./RecentLinksItems";
import EventsAndRemindersItems from "./EventsAndRemindersItems";
import RecentActivitiesItems from "./RecentActivitiesItems";

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Stack direction="row" spacing={3} sx={{ flexGrow: 1, mt: 2 }}>
        <Stack spacing={3} sx={{ flexGrow: 1 }}>
          <TasksAndProjectsItems number={5} sx={{ minHeight: "100px" }} />
          <RecentLinksItems number={5} sx={{ minHeight: "100px" }} />
        </Stack>
        <Stack spacing={3} sx={{ flexGrow: 1 }}>
          <RecentActivitiesItems number={12} sx={{ minHeight: "100px" }} />
          <EventsAndRemindersItems number={8} sx={{ minHeight: "100px" }} />
        </Stack>
      </Stack>
    </Box>
  );
}
