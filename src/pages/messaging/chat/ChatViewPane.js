import * as React from "react";
import Stack from "@mui/material/Stack";
import fakeChats from "../../../models/fake/FakeChats";
import { Suspense } from "react";
import Loader from "../../../components/Loader";
import ErrorBoundary from "../../../components/ErrorBoundary";

import ChatsView from "../../../components/ChatsView";
//const ChatsView = React.lazy(() => import("../../../components/ChatsView"));

import MessageEditor from "../../../components/MessageEditor";
/*const MessageEditor = React.lazy(() =>
  import("../../../components/MessageEditor")
);*/

export default function ChatViewPane() {
  var chats = fakeChats(1000); //TODO - TESTING WITH FAKE FOR NOW
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        height: "100%",
        maxHeight: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <ChatsView chats={chats} />
      <br />
      <MessageEditor />
    </div>
  );
}
