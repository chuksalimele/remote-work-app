import * as React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DoneIcon from "@mui/icons-material/Done";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AttachFileIcon from "@mui/icons-material/AttachFile";

var spacer = <Box sx={{ flexGrow: 1 }}></Box>;

export default function MailItem({ mail, itemCategory }) {
  var hasAttachment = mail.attachmentIds && mail.attachmentIds.length > 0;
  var correspondenceText = "";
  if (mail.correspondenceIds) {
    if (mail.correspondenceIds.length <= 1) {
      correspondenceText = `${mail.correspondenceIds.length} correspondence`;
    } else {
      correspondenceText = `${mail.correspondenceIds.length} correspondences`;
    }
  }
  var commentText = "";
  if (mail.commentIds) {
    if (mail.commentIds.length <= 1) {
      commentText = `${mail.commentIds.length} comment`;
    } else {
      commentText = `${mail.commentIds.length} comments`;
    }
  }

  return (
    <Grid item xs={12} sm container>
      <Grid item xs container spacing={1} zeroMinWidth>
        <Stack direction="row" spacing={1}>
          <Typography
            gutterBottom
            variant="subtitle1"
            sx={{ flexGrow: 1 }}
            component="div"
          >
            {mail.subject}
          </Typography>
          {hasAttachment ? <AttachFileIcon fontSize="small" /> : null}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {mail.message}
        </Typography>
      </Grid>
      <Grid item xs container direction="row" spacing={1}>
        <Stack direction="row" spacing={1}>
          {/** this is only visible for sent mail */}
          {itemCategory === "sent" && mail.status === "read" ? (
            <DoneAllIcon color="green" fontSize="small" />
          ) : itemCategory === "sent" && mail.status === "delivered" ? (
            <DoneAllIcon fontSize="small" />
          ) : itemCategory === "sent" && mail.status === "sent" ? (
            <DoneIcon fontSize="small" />
          ) : null}

          {spacer}
          <Button size="small">{correspondenceText}</Button>
          <Button size="small">{commentText}</Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
