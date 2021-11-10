import * as React from "react";
import Moment from "react-moment";
import moment from "moment";
import CommonItem from "./CommonItem";
import ShowMoreText from "react-show-more-text";
import MsgIndicator from "./MsgIndicator";
import auth from "../controllers/AuthController";
import { avatarBgColor, getUserById, getUserFullNameById } from "../util/Util";
import ReactionIconButton from "./ReactionIconButton";
import { Reply } from "@mui/icons-material";
import { Avatar, Badge, Button, Divider, Stack } from "@mui/material";
import { makeStyles } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

var MAX_SHOW_LESS_LINES = 7;

var useStyles = makeStyles({
  root: {
    width: "100%",
    overflow: "auto",
  },
  bubble: {
    width: "100%",
  },
  time: {
    width: "80px",
    fontSize: "10px",
  },
  fullName: {
    fontWeight: 700,
  },
  message: {
    fontSize: "12px",
    bacgroundColor: blueGrey[300],
  },
  photo: (prop) => ({
    background: avatarBgColor(prop.fullName), //remember we passed the fullName as prop - see comment below
    width: "40px",
    height: "440px",
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
  lastWeek: "[last] dddd LT",
  nextWeek: "dddd LT",
  sameElse: "ll",
};

const calendarDiviiderStrings = {
  lastDay: "[Yesterday]",
  sameDay: "[Today]",
  nextDay: "[Tomorrow]",
  lastWeek: "[last] dddd",
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
      right={
        <Moment
          className={classes.time}
          calendar={calendarMsgStrings}
          date={comment.time}
        />
      }
      top={<div className={classes.fullName}>{fullName}</div>}
      center={
        <ShowMoreText
          lines={MAX_SHOW_LESS_LINES}
          more="Show more >>"
          less="<< Show less"
          className={classes.message}
          anchorClass="my-anchor-css-class"
          onClick={OnClickMessage}
          expanded={false}
          truncatedEndingComponent={"... "}
        >
          {comment.message}
        </ShowMoreText>
      }
      bottom={
        <Stack direction="row" spacing={2}>
          {/** Click this button to like comment - a 'like' reaction of user */}
          <ReactionIconButton
            type="like"
            badgeText={comment.likes.length}
            byMe={comment.likeIds.find((id) => id === appUserId)}
            onClick={OnClickLike}
          />
          {/** Click this button to dislike comment - a 'dislike' reaction of user */}
          <ReactionIconButton
            type="dislike"
            badgeText={comment.dislikes.length}
            byMe={comment.dislikeIds.find((id) => id === appUserId)}
            onClick={OnClickDislike}
          />
          {/** Show a list of users that clicked like or dislike botton */}
          <Button size="small" onClick={OnClickShowReactions}>
            {"Reactions"}
          </Button>
          {/** Show a reply view of those who replied this comment
           * and also make a provision for someone to add reply */}
          <Button
            size="small"
            onClick={OnClickReplies}
            endIcon={
              <Badge
                color="secondary"
                badgeContent={comment.replyIds.length}
                max={999}
              >
                <Reply />
              </Badge>
            }
          >
            {"Replies"}
          </Button>
        </Stack>
      }
    />
  );
}

export default function CommentsView({ comments }) {
  const classes = useStyles();

  return (
    <Stack spacing={1} direction="column" className={classes.root}>
      {comments.map((comment, index) => {
        var MsgBubble = <CommentBubble comment={comment} />;

        var prevComment = comments[index - 1];
        var TimeDivider = null;
        if (
          index === 0 ||
          !moment(prevComment.time).isSame(comment.time, "day")
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
