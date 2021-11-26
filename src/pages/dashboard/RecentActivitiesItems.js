import * as React from "react";
import BoardItem from "../../components/BoardItem";
import CommonItem from "../../components/CommonItem";
import Moment from "react-moment";
import { Typography } from "@mui/material";
import fakeRecentActivities from "../../models/fake/FakeRecentActivities";

const calendartrings = {
  lastDay: "[Yesterday] LT",
  sameDay: "LT",
  nextDay: "[Tomorrow] LT",
  lastWeek: "[Last] dddd LT",
  nextWeek: "dddd LT",
  sameElse: "ll",
};

export default function RecentActivitiesItems(props) {
  var recentActivities = fakeRecentActivities(20); //TODO - TESTING WITH FAKE FOR NOW

  return (
    <BoardItem
      header="Recent Activities"
      items={recentActivities}
      maxShowItems={props.number}
      itemRenderer={(item) => {
        return (
          <CommonItem
            left={
              <div
                style={{
                  width: "150px",
                }}
              >
                <Moment calendar={calendartrings} date={item.time} />
              </div>
            }
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
