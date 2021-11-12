import * as React from "react";
import { Link } from "@mui/material";
import BoardItem from "../../components/BoardItem";
import { Link as RouterLink } from "react-router-dom";
import fakeRecentActivities from "../../models/fake/FakeRecentActivities";

var recentLinks = fakeRecentActivities(20); //TODO - TESTING WITH FAKE FOR NOW

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
