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
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

var MAX_SHOW_LESS_LINES = 2;

var useStyles = makeStyles({
  root: {
    padding: "4px",
    overflow: "auto",
  },
  bubbleSent: {
    maxWidth: "40vw", //Workaround!!! measure with viewport rather than percentage since we are using flexbox model. So as to avoid distortion of the layout when message expands or during window resize
    marginBottom: "10px",
  },

  bubbleReceived: {
    maxWidth: "40vw", //Workaround!!! measure with viewport rather than percentage since we are using flexbox model. So as to avoid distortion of the layout when message expands or during window resize
    marginLeft: 0,
    marginBottom: "10px",
  },
  timeSent: {
    width: "120px",
    fontSize: "10px",
    textAlign: "right",
    marginRight: "5px",
  },
  timeReceive: {
    width: "120px",
    fontSize: "10px",
    textAlign: "left",
  },
  fullName: {
    fontWeight: 700,
  },
  messageSent: {
    fontSize: "12px",
    padding: "5px",
    borderRadius: "2px",
    backgroundColor: blue[100],
  },
  messageReceived: {
    fontSize: "12px",
    padding: "5px",
    borderRadius: "2px",
    backgroundColor: grey[100],
  },
  showMoreTextAnchor: {
    backgroundColor: "inherit",
  },
  photo: (prop) => ({
    backgroundColor: avatarBgColor(prop.fullName), //remember we passed the fullName as prop - see comment below
    width: "30px",
    height: "30px",
  }),
  dayDivider: {
    marginTop: "20px",
    marginBottom: "20px",
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
            more="More"
            less="Less"
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
              className={classes.timeSent}
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
            more="More"
            less="Less"
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
        <Moment className={classes.timeReceive} calendar={calendarMsgStrings}>
          {chat.time}
        </Moment>
      }
    />
  );
}

export default function ChatsView({ sx, chats }) {
  const sortedChats = [...chats].sort((a, b) => b.time - a.time);
  const classes = useStyles();
  const chunkSize = 10;
  const initialState = {
    items: sortedChats.slice(0, chunkSize),
    hasMore: chunkSize < sortedChats.length,
  };

  const [state, setState] = useState(initialState);

  const nextItems = (items) => {
    var size = sortedChats.length - items.length;
    size = size > chunkSize ? chunkSize : size;
    return sortedChats.slice(0, items.length + size); //COME BACK TO CHECK FOR CORRECTNESS
  };

  const fetchMoreData = () => {
    //we can asynchronously fetch more data here
    setTimeout(() => {
      setState({
        items: nextItems(state.items),
        hasMore: state.items.length < sortedChats.length,
      });
    }, 1500); // add this delay to show the Loading indication - NOTE if we are getting the data from the network then remove the delay as the network dealy is enough to show the Loading indicator
  };

  var scrollable_id = "scrollable-chat-view-container";

  return (
    <Stack
      id={scrollable_id}
      style={{
        display: "flex",
        flexDirection: "column-reverse", //required to enabble the InfiniteScroll component put the scroll bar on te bottom
      }}
      spacing={1}
      direction="column"
      className={classes.root}
    >
      {/*Put the scroll bar always on the bottom*/}
      <InfiniteScroll
        dataLength={state.items.length}
        next={fetchMoreData}
        style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
        inverse={true} //
        hasMore={state.hasMore}
        loader={<h4>Loading...</h4>}
        scrollableTarget={scrollable_id}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {state.items.map((chat, index) => {
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
          var nextChat = state.items[index + 1];
          var TimeDivider = null;
          if (
            (nextChat && !moment(nextChat.time).isSame(chat.time, "day")) ||
            index === state.items.length - 1
          ) {
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
      </InfiniteScroll>
    </Stack>
  );
}
