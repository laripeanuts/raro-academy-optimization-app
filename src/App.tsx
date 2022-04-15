import { ChatProvider } from "./contexts/chat.context";
import Chat from "./pages/Chat";

export default function App() {
  return (
    <ChatProvider>
      <Chat />
    </ChatProvider>
  );
}
