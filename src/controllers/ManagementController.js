import { Close } from "@mui/icons-material";
import Done from "@mui/icons-material/Done";
import UserItem from "../components/UserItem";
import { getUserById, getProjectById } from "../util/Util";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default new (function () {
  this.FILTER_ONGING = 1; //these tasks include defferred task
  this.FILTER_I_AM_ASSIGNED_TO = 2;
  this.FILTER_I_AM_FOLLOWING = 3;
  this.FILTER_CREATED_BY_ME = 4;
  this.FILTER_IN_PROGRESS = 5; //these tasks do not include defferred task
  this.FILTER_OVER_DUE = 6;
  this.FILTER_DEFFERRED = 7;
  this.FILTER_COMPLETED = 8;

  this.getTasksGrid = function (filterArr) {
    const gridColumnDef = [
      {
        field: "id", //task id - will be hidden
        headerName: "ID",
      },
      {
        field: "name",
        headerName: "Name",
      },
      {
        field: "createdById",
        headerName: "Created By",
        renderCell: (params) => {
          return (
            <UserItem
              user={getUserById(params.createdById)}
              secondaryAction={""}
            />
          );
        },
      },
      {
        field: "responsiblePersonId",
        headerName: "Responsible Person",
        renderCell: (params) => {
          return (
            <UserItem
              user={getUserById(params.responsiblePersonId)}
              secondaryAction={""}
            />
          );
        },
      },
      {
        field: "participantIds",
        headerName: "Participants",
        renderCell: (params) => {
          var participantIds = params.participantIds;

          var displayParticipants = (evt) => {
            //todo
          };

          return (
            <Button
              variant="outlined"
              size="small"
              onClick={displayParticipants}
            >
              View
            </Button>
          );
        },
      },
      {
        field: "status",
        headerName: "Status",
      },
      {
        field: "projectId",
        headerName: "Project",
        renderCell: (params) => {
          var project = getProjectById(params.projectId);
          var displayProject = (evt) => {
            //TODO - display project page. The project page is like a project dashboard that shows
            //the various aspects of the project like members, start date and deadline
            // estimated cost, timeline, recent created tasks, recent completed task and so on
          };

          return project ? (
            <Link onClick={displayProject}>{project.name}</Link>
          ) : (
            <em>No project</em>
          );
        },
      },
      {
        field: "createdTime",
        headerName: "Created On",
      },
      {
        field: "modifiedTime",
        headerName: "Modified On",
      },
      {
        field: "closedTime",
        headerName: "Closed On",
      },
      {
        field: "deadline",
        headerName: "Deadline",
      },
      {
        field: "estimatedTimeRequired",
        headerName: "Estimated Time Required",
      },
      {
        field: "trackTimeSpent",
        headerName: "Track Time Spent",
      },
      {
        field: "score",
        headerName: "Score",
      },
      {
        field: "responsiblePersonMayChangeDeadline",
        headerName: "Can Change Deadline",
        renderCell: (params) => {
          return params.responsiblePersonMayChangeDeadline ? (
            <Done color="green" />
          ) : (
            <Close />
          );
        },
      },
      {
        field: "timeSpent",
        headerName: "Time Spent",
      },
      {
        field: "tag",
        headerName: "Tag",
      },
      {
        field: "lead",
        headerName: "Lead",
      },
      {
        field: "contact",
        headerName: "Contact",
      },
      {
        field: "company",
        headerName: "Company",
      },
      {
        field: "deal",
        headerName: "Deal",
      },
    ];

    return; //todo -  return the grid
  };

  return this;
})();
