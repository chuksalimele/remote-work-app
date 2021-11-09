import { ViewConstants } from "../util/ViewConstants";

import Dashboard from "../pages/dashboard/Dashboard";

import TaskPane from "../pages/management/task/TaskPane";
import ProjectPane from "../pages/management/project/ProjectPane";
import WorkgroupPane from "../pages/management/workgroup/WorkgroupPane";

import AudioCallPane from "../pages/messaging/audio/AudioCallPane";
import VideoCallPane from "../pages/messaging/video/VideoCallPane";
import ChatPane from "../pages/messaging/chat/ChatPane";
import ConferencePane from "../pages/messaging/conference/ConferencePane";

import DocumentTemplatePane from "../pages/document/documenttemplate/DocumentTemplatePane";
import MySignaturePane from "../pages/document/mysignature/MySignaturePane";
import OfficeMailPane from "../pages/document/officemail/OfficeMailPane";

import BusinessIntelligencePane from "../pages/businessintelligence/BusinessIntelligencePane";
import CalendarPane from "../pages/calendar/CalendarPane";
import DrivePane from "../pages/drive/DrivePane";
import IssuesTrackingPane from "../pages/issuestracking/IssuesTrackingPane";
import OrganizationPane from "../pages/organization/OrganizationPane";
import ScreenSharingPane from "../pages/screensharing/ScreenSharingPane";
import SettingsPane from "../pages/settings/SettingsPane";

export var pageRoutes = [
  {
    name: ViewConstants.Dashboard,
    component: <Dashboard />,
    url: "/",
    icon: "",
  },
  {
    name: ViewConstants.Tasks,
    component: <TaskPane />,
    url: "/management/tasks",
    icon: "",
  },
  {
    name: ViewConstants.Projects,
    component: <ProjectPane />,
    url: "/management/projects",
    icon: "",
  },
  {
    name: ViewConstants.Workgroups,
    component: <WorkgroupPane />,
    url: "/management/workgroups",
    icon: "",
  },
  {
    name: ViewConstants.Chats,
    component: <ChatPane />,
    url: "/messaging/chats",
    icon: "",
  },
  {
    name: ViewConstants.Video_Calls,
    component: <VideoCallPane />,
    url: "/messaging/video_calls",
    icon: "",
  },
  {
    name: ViewConstants.Make_Video_Calls,
    component: <VideoCallPane />,
    url: "/messaging/video_calls",
    icon: "",
  },
  {
    name: ViewConstants.Audio_Calls,
    component: <AudioCallPane />,
    url: "/messaging/audio_calls",
    icon: "",
  },
  {
    name: ViewConstants.Make_Audio_Calls,
    component: <AudioCallPane />,
    url: "/messaging/audio_calls",
    icon: "",
  },
  {
    name: ViewConstants.Conferencing,
    component: <ConferencePane />,
    url: "/messaging/conference",
    icon: "",
  },
  {
    name: ViewConstants.Office_Mail,
    component: <OfficeMailPane />,
    url: "/document/office_mail",
    icon: "",
  },
  {
    name: ViewConstants.My_Signature,
    component: <MySignaturePane />,
    url: "/document/my_signature",
    icon: "",
  },
  {
    name: ViewConstants.Document_Template,
    component: <DocumentTemplatePane />,
    url: "/document/document_template",
    icon: "",
  },
  {
    name: ViewConstants.Business_Intelligence,
    component: <BusinessIntelligencePane />,
    url: "/business_intelligence",
    icon: "",
  },
  {
    name: ViewConstants.Calendar,
    component: <CalendarPane />,
    url: "/calendar",
    icon: "",
  },
  {
    name: ViewConstants.Drive,
    component: <DrivePane />,
    url: "/drive",
    icon: "",
  },
  {
    name: ViewConstants.Issues_Tracking,
    component: <IssuesTrackingPane />,
    url: "/issues_tracking",
    icon: "",
  },
  {
    name: ViewConstants.Organization,
    component: <OrganizationPane />,
    url: "/organization",
    icon: "",
  },
  {
    name: ViewConstants.Screen_Sharing,
    component: <ScreenSharingPane />,
    url: "/screen_sharing",
    icon: "",
  },
  {
    name: ViewConstants.Settings,
    component: <SettingsPane />,
    url: "/settings",
    icon: "",
  },
];
