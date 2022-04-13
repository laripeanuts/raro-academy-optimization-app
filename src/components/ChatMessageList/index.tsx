import { useEffect } from "react";
import { useChat } from "../../contexts/chat.context";
import { ChatMessage } from "../ChatMessage";
import { MyChatMessage } from "../MyChatMessage";

export const ChatMessageList = () => {
  const { mensagens, buscaMensagem } = useChat();

  useEffect(() => {
    const listaMensagens = document.querySelector('#mensagens');
    if (listaMensagens) {
      listaMensagens.scrollTo({
        top: listaMensagens.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [mensagens]);

  return (
    <div id="mensagens" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-purple scrollbar-thumb-rounded scrollbar-track-purple-lighter scrollbar-w-2 scrolling-touch">
      {
        [...mensagens]
        .reverse()
        .filter(mensagem => mensagem.texto.match(new RegExp(buscaMensagem, 'i')))
        .map(mensagem => (
          mensagem.autor.usuarioAtual ?
            <MyChatMessage mensagem={ mensagem }  /> :
            <ChatMessage mensagem={ mensagem } />
        ))
      }
    </div>
  );
}