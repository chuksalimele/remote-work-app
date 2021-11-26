import * as React from "react";
import { MessageEditor } from "../../../components/MessageEditor";
import ChatsView from "../../../components/ChatsView";
import Stack from "@mui/material/Stack";
import fakeChats from "../../../models/fake/FakeChats";

export default function ChatViewPane() {
  var chats = fakeChats(60); //TODO - TESTING WITH FAKE FOR NOW
  return (
    <Stack direction="column" sx={{ height: "100%" }}>
      <ChatsView sx={{ flexGrow: 1, height: "100%" }} chats={chats} />
      <MessageEditor />
    </Stack>
  );
}
