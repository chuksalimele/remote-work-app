import * as React from "react";
import Moment from "react-moment";
import moment from "moment";
import CommonItem from "./CommonItem";
import ShowMoreText from "react-show-more-text";
import { avatarBgColor, getUserById, getUserFullNameById } from "../util/Util";
import ReactionIconButton from "./ReactionIconButton";
import { Reply } from "@mui/icons-material";
import auth from "../controllers/AuthController";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  Tooltip,
  Divider,
  Stack,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blue, blueGrey, grey } from "@mui/material/colors";
import MsgIndicator from "./MsgIndicator";
//import LazyLoad from "react-lazyload";
import { LazyLoad, useVisibilityHook } from "react-observer-api";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

var MAX_SHOW_LESS_LINES = 7;

var useStyles = makeStyles({
  root: {
    padding: "4px",
    width: "100%",
    height: "100%",
  },
  bubble: {
    maxWidth: "100%",
  },
  time: {
    width: "80px",
    fontSize: "10px",
  },
  fullName: {
    fontWeight: 700,
  },
  message: (prop) => ({
    fontSize: "12px",
    padding: "5px",
    borderRadius: "2px",
    backgroundColor: prop.fromId === auth.AuthUser().id ? blue[100] : grey[100],
  }),
  showMoreTextAnchor: {
    backgroundColor: grey[100],
  },
  photo: (prop) => ({
    backgroundColor: avatarBgColor(prop.fullName), //remember we passed the fullName as prop - see comment below
    width: "40px",
    height: "40px",
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

function CommentBubble({ comment }) {
  var user = getUserById(comment.fromId);
  var appUserId = user.id;
  var fullName = user ? getUserFullNameById(appUserId) : "";
  var photoUrl = user ? user.photoUrl : "";

  const classes = useStyles({ fullName, ...comment }); //pass the fullName as prop also to the style

  var OnClickMessage = (evt) => {
    //
  };

  var OnClickLike = (evt) => {
    //
  };
  var OnClickDislike = (evt) => {
    //
  };
  var OnClickShowReactions = (evt) => {
    //
  };
  var OnClickReplies = (evt) => {
    //
  };

  return (
    <CommonItem
      className={classes.bubble}
      left={
        <Avatar className={classes.photo} src={photoUrl}>
          {fullName ? fullName[0] : ""}
        </Avatar>
      }
      right={<MsgIndicator status={comment.status} />}
      top={
        <Stack direction="row" spacing={1}>
          <div className={classes.fullName}>{fullName}</div>
          <Moment
            className={classes.time}
            calendar={calendarMsgStrings}
            date={comment.time}
          />
        </Stack>
      }
      center={
        <ShowMoreText
          lines={MAX_SHOW_LESS_LINES}
          more="More"
          less="Less"
          className={classes.message}
          anchorClass={classes.showMoreTextAnchor}
          onClick={OnClickMessage}
          expanded={false}
          truncatedEndingComponent={"... "}
        >
          {comment.message}
        </ShowMoreText>
      }
      bottom={
        <Stack direction="row" spacing={0.8}>
          {/** Click this button to like comment - a 'like' reaction of user */}
          <ReactionIconButton
            type="like"
            badgeText={comment.likeIds.length}
            byMe={comment.likeIds.find((id) => id === appUserId)}
            onClick={OnClickLike}
          />
          {/** Click this button to dislike comment - a 'dislike' reaction of user */}
          <ReactionIconButton
            type="dislike"
            badgeText={comment.dislikeIds.length}
            byMe={comment.dislikeIds.find((id) => id === appUserId)}
            onClick={OnClickDislike}
          />
          {/** Show a list of users that clicked like or dislike botton */}
          <Button
            size="small"
            sx={{ fontSize: "10px" }}
            onClick={OnClickShowReactions}
          >
            {"Reactions"}
          </Button>
          {/** Show a reply view of those who replied this comment
           * and also make a provision for someone to add reply */}
          <Tooltip title={"Replies"} placement="bottom">
            <IconButton color="inherit" size="small" onClick={OnClickReplies}>
              <Badge
                color="secondary"
                badgeContent={comment.replyIds.length}
                max={999}
              >
                <Reply />
              </Badge>
            </IconButton>
          </Tooltip>
        </Stack>
      }
    />
  );
}

export default function CommentsView({ comments, sx }) {
  const sortedComments = [...comments].sort((a, b) => b.time - a.time);
  const classes = useStyles();
  const chunkSize = 5;
  const initialState = {
    items: sortedComments.slice(0, chunkSize),
    hasMore: chunkSize < sortedComments.length,
  };

  const [state, setState] = useState(initialState);

  const nextItems = (items) => {
    var size = sortedComments.length - items.length;
    size = size > chunkSize ? chunkSize : size;
    return sortedComments.slice(0, items.length + size); //COME BACK TO CHECK FOR CORRECTNESS
  };

  const fetchMoreData = () => {
    //we can asynchronously fetch more data here
    setTimeout(() => {
      setState({
        items: nextItems(state.items),
        hasMore: state.items.length < sortedComments.length,
      });
    }, 1500); // add this delay to show the Loading indication - NOTE if we are getting the data from the network then remove the delay as the network dealy is enough to show the Loading indicator
  };

  var scrollable_id = "scrollable-comment-view-container";

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
      sx={sx ? sx : {}}
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
        {state.items.map((comment, index) => {
          var MsgBubble = (
            <CommentBubble key={"comment-bubble" + index} comment={comment} />
          );

          var nextComment = state.items[index + 1];
          var TimeDivider = null;
          if (
            (nextComment &&
              !moment(nextComment.time).isSame(comment.time, "day")) ||
            index === state.items.length - 1
          ) {
            TimeDivider = (
              <Divider className={classes.dayDivider}>
                <Moment
                  className={classes.dayDividerTime}
                  calendar={calendarDiviiderStrings}
                  date={comment.time}
                />
              </Divider>
            );
          }

          var compView = TimeDivider ? (
            <div key={"comment-bubble-with-divider" + index}>
              {TimeDivider} {MsgBubble}
            </div>
          ) : (
            MsgBubble
          );

          return compView;
        })}
      </InfiniteScroll>
    </Stack>
  );
}
