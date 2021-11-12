import {
  ThumbDownAlt,
  ThumbDownOffAlt,
  ThumbUpAlt,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function ReactionIconButton({ type, badgeText, byMe }) {
  var meColor = blue[400];
  var icon =
    type === "like" && byMe === true ? (
      <ThumbUpAlt sx={{ color: meColor }} />
    ) : type === "like" ? (
      <ThumbUpOffAlt />
    ) : type === "dislike" && byMe === true ? (
      <ThumbDownAlt sx={{ color: meColor }} />
    ) : type === "disklike" ? (
      <ThumbDownOffAlt />
    ) : null;

  var toolTipText =
    type === "like" ? "Like" : type === "dislike" ? "Dislike" : "";

  return (
    <Tooltip title={toolTipText} placement="bottom">
      <IconButton color="inherit" size="small">
        {badgeText ? (
          <Badge color="secondary" badgeContent={badgeText} max={999}>
            {icon}
          </Badge>
        ) : (
          { icon }
        )}
      </IconButton>
    </Tooltip>
  );
}
