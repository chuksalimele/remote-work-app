import * as React from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { LeftMenuData } from "../../models/LeftMenuData";
import { ListItem, Tooltip } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import LeftMoreMenu from "./LeftMoreMenu";
import MenuExt from "../../components/MenuExt";
import { getPageUrl, invertBgColor } from "../../util/Util";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function LeftSidebarMini(props) {
  const theme = useTheme();
  var obj = {};
  for (var n in LeftMenuData) {
    var name = LeftMenuData[n].name;
    obj[name] = false;
  }

  const [anchor, setAnchor] = React.useState({});
  const [flag, setFlag] = React.useState({});

  const handleClick = (evt, name) => {
    anchor[name] = evt.currentTarget;
    flag[name] = !flag[name];

    //for the object and array you must change the refrence by creating a new object or array
    //and using the spread operator to copy the properties to force rendering of the component
    //otherwise the new state value will not be detected by React
    setAnchor({ ...anchor });
    setFlag({ ...flag });
  };

  return (
    <List
      sx={{
        width: 100,
        height: "100vh",
        bgcolor: `${theme.palette.primary.main}`,
        ...invertBgColor(theme),
      }}
      component="nav"
      subheader={
        <ListSubheader
          component="div"
          sx={{ padding: "10px", bgcolor: "inherit" }}
        >
          <Card elevation={0} sx={{ width: "50px", bgcolor: "inherit" }}>
            {/**Companay logo or picture */}
            <CardMedia
              component="img"
              height="50"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
          </Card>
        </ListSubheader>
      }
    >
      {LeftMenuData.map((item) => {
        if (item.submenus && item.submenus.length > 0) {
          return (
            <div key={item.name}>
              <Tooltip key={item.name + 1} title={item.name} placement="right">
                <ListItemButton onClick={(evt) => handleClick(evt, item.name)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ChevronRight />
                </ListItemButton>
              </Tooltip>
              <MenuExt
                inverse
                flag={flag[item.name]}
                anchor={anchor[item.name]}
                items={item.submenus}
                marginLeft="5px"
                anchorVertical="top"
                anchorHorizontal="right"
                menuVertical="top"
                menuHorizontal="left"
                arrowDirection="left"
              />
            </div>
          );
        } else if (!item.overflow) {
          return (
            <Tooltip title={item.name + 2} placement="right">
              <ListItem button component={Link} to={getPageUrl(item.name)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
              </ListItem>
            </Tooltip>
          );
        } else {
          return null;
        }
      })}

      <LeftMoreMenu tooltip items={LeftMenuData} />
    </List>
  );
}
