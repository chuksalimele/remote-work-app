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

var recentLinks = [];

export default function RecentLinksItems(props) {
  return (
    <BoardItem
      header="Recent Links"
      items={recentLinks}
      maxShowItems={props.number}
      itemRenderer={(item) => {
        return (
          <Link component={RouterLink} to={item.url}>
            {item.name}
          </Link>
        );
      }}
      {...props}
    />
  );
}
