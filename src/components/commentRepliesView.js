import * as React from "react";
import Moment from "react-moment";
import moment from "moment";
import CommonItem from "./CommonItem";
import ShowMoreText from "react-show-more-text";
import MsgIndicator from "./MsgIndicator";
import { avatarBgColor, getUserById, getUserFullNameById } from "../util/Util";
import ReactionIconButton from "./ReactionIconButton";
import { Reply } from "@mui/icons-material";
import { Avatar, Badge, Button, Divider, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blueGrey, grey } from "@mui/material/colors";

var MAX_SHOW_LESS_LINES = 7;

var useStyles = makeStyles({
  root: {
    padding: "4px",
    width: "100%",
    overflow: "auto",
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
  message: {
    fontSize: "12px",
    padding: "5px",
    borderRadius: "2px",
    backgroundColor: blueGrey[300],
  },
  ownerMessage: {
    fontSize: "12px",
  },
  showMoreTextAnchor: {
    backgroundColor: grey[600],
  },
  photo: (prop) => ({
    backgroundColor: avatarBgColor(prop.fullName), //remember we passed the fullName as prop - see comment below
    width: "40px",
    height: "40px",
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

function CommentReplyBubble({ comment: reply }) {
  var user = getUserById(reply.fromId);
  var appUserId = user.id;
  var fullName = user ? getUserFullNameById(appUserId) : "";
  var photoUrl = user ? user.photoUrl : "";

  const classes = useStyles({ fullName, ...reply }); //pass the fullName as prop also to the style

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
        <Stack direction="row" spacing={1}>
          <Moment
            className={classes.time}
            calendar={calendarMsgStrings}
            date={reply.time}
          />
          <MsgIndicator status={reply.status} />
        </Stack>
      }
      top={<div className={classes.fullName}>{fullName}</div>}
      center={
        <ShowMoreText
          lines={MAX_SHOW_LESS_LINES}
          more="Show more >>"
          less="<< Show less"
          className={classes.message}
          anchorClass={classes.showMoreTextAnchor}
          onClick={OnClickMessage}
          expanded={false}
          truncatedEndingComponent={"... "}
        >
          {reply.message}
        </ShowMoreText>
      }
      bottom={
        <Stack direction="row" spacing={2}>
          {/** Click this button to like reply - a 'like' reaction of user */}
          <ReactionIconButton
            type="like"
            badgeText={reply.likes.length}
            byMe={reply.likeIds.find((id) => id === appUserId)}
            onClick={OnClickLike}
          />
          {/** Click this button to dislike reply - a 'dislike' reaction of user */}
          <ReactionIconButton
            type="dislike"
            badgeText={reply.dislikes.length}
            byMe={reply.dislikeIds.find((id) => id === appUserId)}
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
                badgeContent={reply.replyIds.length}
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

function OwnerCommentItem({ comment, expandComment }) {
  var user = getUserById(comment.fromId);
  var appUserId = user.id;
  var fullName = user ? getUserFullNameById(appUserId) : "";
  var photoUrl = user ? user.photoUrl : "";

  const classes = useStyles({ fullName, ...reply }); //pass the fullName as prop also to the style

  var replyCount = comment.replyIds.length;
  return (
    <Stack spacing={2} direction="column">
      <Stack spacing={2} direction="row">
        <Avatar className={classes.photo} src={photoUrl}>
          {fullName ? fullName[0] : ""}
        </Avatar>
        <div className={classes.fullName}>{fullName}</div>
        <Moment
          className={classes.time}
          calendar={calendarMsgStrings}
          date={comment.time}
        />
      </Stack>
      <ShowMoreText
        lines={MAX_SHOW_LESS_LINES}
        more="Show more >>"
        less="<< Show less"
        className={classes.ownerMessage}
        anchorClass={classes.showMoreTextAnchor}
        onClick={OnClickMessage}
        expanded={expandComment}
        truncatedEndingComponent={"... "}
      >
        {comment.message}
      </ShowMoreText>
      <Divider className={classes.dayDivider}>
        {`${
          replyCount === 1 ? `${replyCount} Reply` : `${replyCount} Replies`
        } `}
      </Divider>
    </Stack>
  );
}

export default function CommentRepliesView({ comment }) {
  const classes = useStyles();

  var replies = getReplies(comment.replyIds);

  return (
    <Stack spacing={1} direction="column" className={classes.root}>
      <OwnerCommentItem comment={comment} expandComment />
      {replies.map((reply, index) => {
        var MsgBubble = <CommentReplyBubble reply={reply} />;

        var prevReply = replies[index - 1];
        var TimeDivider = null;
        if (index === 0 || !moment(prevReply.time).isSame(index.time, "day")) {
          TimeDivider = (
            <Divider className={classes.dayDivider}>
              <Moment
                className={classes.dayDividerTime}
                calendar={calendarDiviiderStrings}
                date={reply.time}
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
