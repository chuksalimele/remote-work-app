import {
  Analytics,
  Assignment,
  AddToDrive,
  Business,
  Call,
  Chat,
  Duo,
  Event,
  FileCopy,
  Groups,
  GroupWork,
  Lock,
  Message,
  NoteAdd,
  PeopleAlt,
  Report,
  ScreenShare,
  Settings,
  VideoCall,
} from "@mui/icons-material";

import Mail from "@mui/icons-material/Mail";
import { ViewConstants } from "../util/ViewConstants";
export var LeftMenuData = [
  {
    name: "Management",
    icon: <PeopleAlt />,
    submenus: [
      {
        name: ViewConstants.Tasks,
        icon: <Assignment />,
      },
      {
        name: ViewConstants.Projects,
        icon: <GroupWork />,
      },
      {
        name: ViewConstants.Workgroups,
        icon: <Groups />,
      },
    ],
  },
  {
    name: "Messaging",
    icon: <Message />,
    submenus: [
      {
        name: ViewConstants.Chats,
        icon: <Chat />,
      },
      {
        name: ViewConstants.Video_Calls,
        icon: <VideoCall />,
      },
      {
        name: ViewConstants.Audio_Calls,
        icon: <Call />,
      },
      {
        name: ViewConstants.Conferencing,
        icon: <Duo />,
      },
    ],
  },
  {
    name: "Document Process",
    icon: <NoteAdd />,
    submenus: [
      {
        name: ViewConstants.Office_Mail,
        icon: <Mail />,
      },
      {
        name: ViewConstants.My_Signature,
        icon: <Lock />,
      },
      {
        name: ViewConstants.Document_Template,
        icon: <FileCopy />,
      },
    ],
  },
  {
    name: ViewConstants.Organization,
    icon: <Business />,
  },
  {
    name: ViewConstants.Business_Intelligence,
    icon: <Analytics />,
  },
  {
    name: ViewConstants.Drive,
    icon: <AddToDrive />,
  },
  {
    name: ViewConstants.Issues_Tracking,
    icon: <Report />,
  },
  {
    name: ViewConstants.Screen_Sharing,
    overflow: true,
    icon: <ScreenShare />,
  },
  {
    name: ViewConstants.Calendar,
    overflow: true,
    icon: <Event />,
  },
  {
    name: ViewConstants.Settings,
    overflow: true,
    icon: <Settings />,
  },
];
