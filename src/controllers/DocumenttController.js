import MailItem from "../components/MailItem";
import SignatoryProgressBar from "../components/SignatoryProgressBar";
import UserItem from "../components/UserItem";
import { getUserById } from "../util/Util";

export default new DocumentController(function () {
  this.FILTER_INBOX = 1;
  this.FILTER_SENT = 2;
  this.FILTER_DRAFT = 3;
  this.FILTER_TRASH = 4;

  var getOfficeMailsGrid = function (gridColumnDef, filter) {};

  this.getOfficeMailCompliantsGrid = function (filter) {
    const gridColumnDef = [
      {
        //hidden in Sent mails but visible in Inbox
        field: "fromId",
        headerName: "From",
        renderCell: (params) => {
          return (
            <UserItem user={getUserById(params.fromId)} secondaryAction={""} />
          );
        },
      },
      {
        //hidden in Inbox but visible in Sent mails
        field: "toId",
        headerName: "To",
        renderCell: (params) => {
          return (
            <UserItem user={getUserById(params.toId)} secondaryAction={""} />
          );
        },
      },
      {
        field: "message",
        headerName: "Complaints",
        renderCell: (params) => {
          return <MailItem mail={params} itemCategory={filter} />;
        },
      },
      {
        field: "time",
        width: 150,
      },
    ];

    return getOfficeMailsGrid(gridColumnDef, filter);
  };

  this.getOfficeMailSuggestionsGrid = function (filter) {
    const gridColumnDef = [
      {
        //hidden in Sent mails but visible in Inbox
        field: "fromId",
        headerName: "From",
        renderCell: (params) => {
          return (
            <UserItem user={getUserById(params.fromId)} secondaryAction={""} />
          );
        },
      },
      {
        //hidden in Inbox but visible in Sent mails
        field: "toId",
        headerName: "To",
        renderCell: (params) => {
          return (
            <UserItem user={getUserById(params.toId)} secondaryAction={""} />
          );
        },
      },
      {
        field: "message",
        headerName: "Suggestions",
        renderCell: (params) => {
          return <MailItem mail={params} itemCategory={filter} />;
        },
      },
      {
        field: "time",
        width: 150,
      },
    ];
    return getOfficeMailsGrid(gridColumnDef, filter);
  };
  this.getOfficeMailQueriesGrid = function (filter) {
    const gridColumnDef = [
      {
        //hidden in Sent mails but visible in Inbox
        field: "fromId",
        headerName: "From",
        renderCell: (params) => {
          return (
            <UserItem user={getUserById(params.fromId)} secondaryAction={""} />
          );
        },
      },
      {
        //hidden in Inbox but visible in Sent mails
        field: "toId",
        headerName: "To",
        renderCell: (params) => {
          return (
            <UserItem user={getUserById(params.toId)} secondaryAction={""} />
          );
        },
      },
      {
        field: "message",
        headerName: "Queries",
        renderCell: (params) => {
          return <MailItem mail={params} itemCategory={filter} />;
        },
      },
      {
        field: "time",
        width: 150,
      },
    ];
    return getOfficeMailsGrid(gridColumnDef, filter);
  };

  this.getOfficeMailRequestsGrid = function (filter) {
    //Request Mail is a signatory document
    return getOfficeMailSignatoryDocumentsGrid(filter);
  };

  this.getOfficeMailSignatoryDocumentsGrid = function (filter) {
    const gridColumnDef = [
      {
        //hidden in Sent mails but visible in Inbox
        field: "fromId",
        headerName: "From",
        renderCell: (params) => {
          return (
            <UserItem user={getUserById(params.fromId)} secondaryAction={""} />
          );
        },
      },
      {
        //hidden in Inbox but visible in Sent mails
        field: "toId",
        headerName: "To",
        renderCell: (params) => {
          return (
            <UserItem user={getUserById(params.toId)} secondaryAction={""} />
          );
        },
      },
      {
        field: "message",
        headerName: "Document",
        renderCell: (params) => {
          return <MailItem mail={params} itemCategory={filter} />;
        },
      },
      {
        field: "stage",
        headerName: "Progress",
        renderCell: (params) => {
          return (
            <SignatoryProgressBar
              stageCompleted={params.stageCompleted}
              totalStages={params.signatoryActions.length}
            />
          );
        },
      },
      {
        field: "time",
        width: 150,
      },
    ];

    return getOfficeMailsGrid(gridColumnDef, filter);
  };
  return this;
})();
