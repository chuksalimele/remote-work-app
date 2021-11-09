import { ViewConstants } from "../util/ViewConstants";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import Assignment from "@mui/icons-material/Assignment";
import { Chat, Call, VideoCall } from "@mui/icons-material";

export var RightMenuData = [
  {
    name: ViewConstants.Notifications,
    icon: <NotificationsIcon />,
    align: "top",
  },
  {
    name: ViewConstants.Search,
    icon: <SearchIcon />,
    align: "top",
  },
  {
    name: ViewConstants.Tasks,
    icon: <Assignment />,
    align: "top",
  },
  {
    name: ViewConstants.Chats,
    icon: <Chat />,
    align: "bottom",
  },
  {
    name: ViewConstants.Make_Video_Calls,
    icon: <VideoCall />,
    align: "bottom",
  },
  {
    name: ViewConstants.Make_Audio_Calls,
    icon: <Call />,
    align: "bottom",
  },
];
