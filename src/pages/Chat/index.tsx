import { ChatHeader } from "../../components/ChatHeader";
import { ChatMessageList } from "../../components/ChatMessageList";
import { ChatTextArea } from "../../components/ChatTextArea";
import { ChatProvider } from "../../contexts/chat.context";

export default function Chat() {
  return (
    <ChatProvider>
      <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
        <ChatHeader />
        <ChatMessageList />
        <ChatTextArea />
      </div>
    </ChatProvider>
  );
}