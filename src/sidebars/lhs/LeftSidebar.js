import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { LeftMenuData } from "../../models/LeftMenuData";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LeftMoreMenu from "./LeftMoreMenu";
import { getPageUrl, invertBgColor } from "../../util/Util";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function LeftSidebar(props) {
  const theme = useTheme();
  var obj = {};
  for (var n in LeftMenuData) {
    var name = LeftMenuData[n].name;
    obj[name] = false;
  }

  const [open, setOpen] = React.useState(obj);

  const handleClick = (name) => {
    for (var n in open) {
      if (n === name) {
        open[name] = !open[name];
      } else {
        open[n] = false; //close all others
      }
    }
    //for the object and array you must change the refrence by creating a new object or array
    //and using the spread operator to copy the properties to force rendering of the component
    //otherwise the new state value will not be detected by React
    setOpen({ ...open });
  };

  return (
    <List
      sx={{
        width: 240,
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
          <Card elevation={0} sx={{ width: "100%", bgcolor: "inherit" }}>
            <CardMedia
              component="img"
              height="60"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Company Name
              </Typography>
              <Typography variant="body2">
                Company motor or brief description
              </Typography>
            </CardContent>
          </Card>
        </ListSubheader>
      }
    >
      <Box
        sx={{
          overflow: "auto",
          maxHeight: "calc(100vh - 250px)",
        }}
      >
        {LeftMenuData.map((item) => {
          if (item.submenus && item.submenus.length > 0) {
            return (
              <div key={item.name}>
                <ListItemButton
                  key={item.name + 1}
                  onClick={() => handleClick(item.name)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                  {open[item.name] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  key={item.name + 2}
                  in={open[item.name]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.submenus.map((sub_item) => (
                      <ListItemButton
                        key={sub_item.name}
                        sx={{ pl: 4 }}
                        component={Link}
                        to={getPageUrl(sub_item.name)}
                      >
                        <ListItemIcon>{sub_item.icon}</ListItemIcon>
                        <ListItemText primary={sub_item.name} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </div>
            );
          } else if (!item.overflow) {
            return (
              <ListItem
                button
                key={item.name + 3}
                component={Link}
                to={getPageUrl(item.name)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            );
          } else {
            return null;
          }
        })}
      </Box>
      <LeftMoreMenu items={LeftMenuData} />
    </List>
  );
}
