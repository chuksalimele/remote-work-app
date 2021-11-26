import * as React from "react";
import { Avatar, Stack, Divider } from "@mui/material";
import Moment from "react-moment";
import moment from "moment";
import CommonItem from "./CommonItem";
import ShowMoreText from "react-show-more-text";
import MsgIndicator from "./MsgIndicator";
import auth from "../controllers/AuthController";
import { avatarBgColor, getUserById, getUserFullNameById } from "../util/Util";
import { makeStyles } from "@mui/styles";
import { blue, blueGrey, grey } from "@mui/material/colors";

var MAX_SHOW_LESS_LINES = 7;

var useStyles = makeStyles({
  root: {
    padding: "4px",
    overflow: "auto",
    width: "100%",
    height: "100%",
  },
  bubbleSent: {
    maxWidth: "75%",
  },

  bubbleReceived: {
    maxWidth: "75%",
    marginLeft: 0,
  },
  time: {
    width: "80px",
    fontSize: "10px",
  },
  fullName: {
    fontWeight: 700,
  },
  messageSent: {
    fontSize: "12px",
    padding: "5px",
    borderRadius: "2px",
    backgroundColor: blue[300],
  },
  messageReceived: {
    display: "inline",
    fontSize: "12px",
    padding: "5px",
    borderRadius: "2px",
    backgroundColor: blueGrey[300],
  },
  showMoreTextAnchor: {
    backgroundColor: grey[600],
  },
  photo: (prop) => ({
    backgroundColor: avatarBgColor(prop.fullName), //remember we passed the fullName as prop - see comment below
    width: "30px",
    height: "30px",
  }),
  dayDivider: {
    marginTop: 3,
    marginBottom: 3,
  },
  dayDividerTime: {
    fontSize: "14px",
    fontWeight: 800,
  },
});

const calendarMsgStrings = {
  lastDay: "[Yesterday] LT",
  sameDay: "LT",
  nextDay: "[Tomorrow] LT",
  lastWeek: "[Last] dddd LT",
  nextWeek: "dddd LT",
  sameElse: "ll",
};

const calendarDiviiderStrings = {
  lastDay: "[Yesterday]",
  sameDay: "[Today]",
  nextDay: "[Tomorrow]",
  lastWeek: "[Last] dddd",
  nextWeek: "dddd",
  sameElse: "ll",
};

function ChatSentBubble({ chat }) {
  const classes = useStyles();

  var OnClickMessage = (evt) => {
    //
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <CommonItem
        className={classes.bubbleSent}
        top={
          <ShowMoreText
            /* Default options */
            lines={MAX_SHOW_LESS_LINES}
            more="Show more >>"
            less="<< Show less"
            className={classes.messageSent}
            anchorClass={classes.showMoreTextAnchor}
            onClick={OnClickMessage}
            expanded={false}
            truncatedEndingComponent={"... "}
          >
            {chat.message}
          </ShowMoreText>
        }
        bottom={
          <Stack
            direction="row"
            sx={{ display: "flex", justifyContent: "flex-end", pr: "2px" }}
          >
            <Moment
              className={classes.time}
              calendar={calendarMsgStrings}
              date={chat.time}
            />
            <MsgIndicator status={chat.status} />
          </Stack>
        }
      />
    </div>
  );
}

function ChatReceivedBubble({ chat }) {
  var user = getUserById(chat.fromId);

  var fullName = user ? getUserFullNameById(user.id) : "";

  var photoUrl = user ? user.photoUrl : "";

  const classes = useStyles({ fullName, ...chat }); //pass the fullName as prop also to the style

  var OnClickMessage = (evt) => {
    //
  };

  return (
    <CommonItem
      className={classes.bubbleReceived}
      left={
        <Avatar className={classes.photo} src={photoUrl}>
          {fullName ? fullName[0] : ""}
        </Avatar>
      }
      top={<div className={classes.fullName}>{fullName}</div>}
      center={
        <span>
          <ShowMoreText
            lines={MAX_SHOW_LESS_LINES}
            more="Show more >>"
            less="<< Show less"
            className={classes.messageReceived}
            anchorClass={classes.showMoreTextAnchor}
            onClick={OnClickMessage}
            expanded={false}
            truncatedEndingComponent={"... "}
          >
            {chat.message}
          </ShowMoreText>
        </span>
      }
      bottom={
        <Moment className={classes.time} calendar={calendarMsgStrings}>
          {chat.time}
        </Moment>
      }
    />
  );
}

export default function ChatsView({ sx, chats }) {
  const classes = useStyles();

  return (
    <Stack spacing={1} direction="column" className={classes.root}>
      {chats.map((chat, index) => {
        var MsgBubble = null;

        if (chat.fromId === auth.AuthUser().id) {
          //sent by the app user
          MsgBubble = <ChatSentBubble chat={chat} />;
        } else if (chat.toId === auth.AuthUser().id) {
          //sent to the app user
          MsgBubble = <ChatReceivedBubble chat={chat} />;
        } else {
          return null;
        }
        var prevChat = chats[index - 1];
        var TimeDivider = null;
        if (index === 0 || !moment(prevChat.time).isSame(chat.time, "day")) {
          TimeDivider = (
            <Divider className={classes.dayDivider}>
              <Moment
                className={classes.dayDividerTime}
                calendar={calendarDiviiderStrings}
                date={chat.time}
              />
            </Divider>
          );
        }
        return TimeDivider ? (
          <div>
            {TimeDivider} {MsgBubble}
          </div>
        ) : (
          MsgBubble
        );
      })}
    </Stack>
  );
}
