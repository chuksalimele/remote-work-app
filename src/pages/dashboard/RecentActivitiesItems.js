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
import Moment from "react-moment";

var recentActivities = [];

export default function RecentActivitiesItems(props) {
  return (
    <BoardItem
      header="Recent Activities"
      items={recentActivities}
      maxShowItems={props.number}
      itemRenderer={(item) => {
        return (
          <CommonItem
            left={<Moment date={item.time} sx={{ width: "120px" }} />}
            top={
              <Typography variant="subtitle2" component="div">
                {item.description}
              </Typography>
            }
          />
        );
      }}
      {...props}
    />
  );
}
