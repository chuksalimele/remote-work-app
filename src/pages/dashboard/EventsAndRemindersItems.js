import * as React from "react";
import { Divider, Typography } from "@mui/material";
import { getPageUrl } from "../../util/Util";
import BoardItem from "../../components/BoardItem";
import CommonItem from "../../components/CommonItem";
import EventIcon from "@mui/icons-material/Event";
import AlarmIcon from "@mui/icons-material/Alarm";
import Moment from "react-moment";
import moment from "moment";
import fakeEventsAndReminders from "../../models/fake/FakeEventsAndReminders";

moment.updateLocale("en", {
  calendar: {
    lastDay: "[Yesterday at] LT",
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    lastWeek: "[Last] dddd [at] LT",
    nextWeek: "dddd [at] LT",
    sameElse: "ll",
  },
});

//alert(moment.duration(123, "minutes").format("h [hrs], m [min]"));

export default function EventsAndRemindersItems(props) {
  var eventsAndReminders = fakeEventsAndReminders(20); //TODO - TESTING WITH FAKE FOR NOW

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
                      (item.event.endTime - item.event.startTime) / 1000
                    )}
                  </span>
                ) : null}
                <Divider />
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
              <div>
                <Moment
                  date={item.reminder.time}
                  filter={formatUpcomingAlarm}
                />
                <Divider />
              </div>
            }
          />
        ) : null;
      }}
      {...props}
    />
  );
}
