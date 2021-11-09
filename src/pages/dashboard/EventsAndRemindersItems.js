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
import Moment from "react-moment";
import moment from "moment";

var eventsAndReminders = [];

moment.updateLocale("en", {
  calendar: {
    lastDay: "[Yesterday at] LT",
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    lastWeek: "[last] dddd [at] LT",
    nextWeek: "dddd [at] LT",
    sameElse: "L",
  },
});

alert(moment.duration(123, "minutes").format("h [hrs], m [min]"));

export default function EventsAndRemindersItems(props) {
  const formatEventStartTime = (time) => {
    return `Comes up  ${moment().calendar(time)}`;
  };
  const formatEventDuration = (duration) => {
    return ` - ${moment
      .duration(duration, "minutes")
      .format("h [hrs], m [min]")} duration`;
  };
  const formatUpcomingAlarm = (time) => {
    return `Upcoming; ${moment().calendar(time)} `;
  };

  return (
    <BoardItem
      header="Events / Reminders"
      items={eventsAndReminders}
      maxShowItems={props.number}
      showSeeMorePath={getPageUrl("Calendar")}
      itemRenderer={(item) => {
        return item.event ? (
          <CommonItem
            left={<EventIcon />}
            top={
              <Typography variant="subtitle1" component="div">
                {item.event.description}
              </Typography>
            }
            center={
              <Typography variant="body2" component="div">
                {`Holds in ${item.event.location}`}
              </Typography>
            }
            bottom={
              <div>
                <Moment
                  date={item.event.startTime}
                  filter={formatEventStartTime}
                  element="span"
                />
                {item.event.endTime > 0 ? (
                  <span>
                    {formatEventDuration(
                      item.event.endTime - item.event.startTime
                    )}
                  </span>
                ) : null}
              </div>
            }
          />
        ) : item.reminder ? (
          <CommonItem
            left={<AlarmIcon />}
            top={
              <Typography variant="subtitle1" component="div">
                {item.reminder.description}
              </Typography>
            }
            bottom={
              <Moment
                date={item.event.startTime}
                filter={formatUpcomingAlarm}
              />
            }
          />
        ) : null;
      }}
      {...props}
    />
  );
}
