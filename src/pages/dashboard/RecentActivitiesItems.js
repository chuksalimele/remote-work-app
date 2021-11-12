import * as React from "react";
import BoardItem from "../../components/BoardItem";
import CommonItem from "../../components/CommonItem";
import Moment from "react-moment";
import { Typography } from "@mui/material";
import fakeRecentActivities from "../../models/fake/FakeRecentActivities";

var recentActivities = fakeRecentActivities(20); //TODO - TESTING WITH FAKE FOR NOW

export default function RecentActivitiesItems(props) {
  return (
    <BoardItem
      header="Recent Activities"
      items={recentActivities}
      maxShowItems={props.number}
      itemRenderer={(item) => {
        return (
          <CommonItem
            left={<Moment date={item.time} sx={{ width: "120px" }} />}
            top={
              <Typography variant="subtitle2" component="div">
                {item.description}
              </Typography>
            }
          />
        );
      }}
      {...props}
    />
  );
}
