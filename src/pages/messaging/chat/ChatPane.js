import * as React from "react";
import Stack from "@mui/material/Stack";
import ChatSidebar from "./ChatSidebar";
import ChatViewPane from "./ChatViewPane";

export default function ChatPane() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "20vw", height: "100%" }}>
        <ChatSidebar />
      </div>
      <div style={{ width: "50vw", height: "100%" }}>
        <ChatViewPane />
      </div>
    </div>
  );
}
