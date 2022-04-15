import { ChatHeader } from "../../components/ChatHeader";
import { ChatMessageList } from "../../components/ChatMessageList";
import { ChatTextArea } from "../../components/ChatTextArea";
import { useChat } from "../../contexts/chat.context";

export default function Chat() {
  const {
    buscaMensagem,
    participantes,
    setBuscaMensagem
  } = useChat();

  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <ChatHeader
        participantes={participantes}
        buscaMensagem={buscaMensagem}
        setBuscaMensagem={setBuscaMensagem}
      />
      <ChatMessageList />
      <ChatTextArea />
    </div>
  );
}
