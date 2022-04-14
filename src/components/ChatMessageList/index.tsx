import { MutableRefObject, useEffect, useRef } from "react";
import { useChat } from "../../contexts/chat.context";
import { useScroll } from "../../hooks/useScroll";
import { ChatMessage } from "../ChatMessage";
import { ChatMessageListBottomScrollButton } from "../ChatMessageListBottomScrollButton";
import { MyChatMessage } from "../MyChatMessage";

// número totalmente arbitrário...
const TAMANHO_MEDIO_MENSAGEM_PX = 300;
export const ChatMessageList = () => {
  const scrollRef: MutableRefObject<Element | null> = useRef(null);
  const { mensagens, buscaMensagem, setMensagens } = useChat();
  const {
    scrollBottom,
    endOfScroll,
    updateEndOfScroll,
    getDistanceFromBottom
  } = useScroll(scrollRef);

  useEffect(() => {
    scrollRef.current = document.querySelector('#mensagens');
    lerNovasMensagens();
  }, []);

  useEffect(() => {
    updateEndOfScroll();
  }, [mensagens, updateEndOfScroll]);

  useEffect(() => {
    const novaMensagem = mensagens[0];
    const distanceFromBottom = getDistanceFromBottom();
    const lerProximaMensagem = distanceFromBottom < TAMANHO_MEDIO_MENSAGEM_PX;
    const minhaMensagem = novaMensagem?.autor.usuarioAtual

    if (minhaMensagem || lerProximaMensagem) {
      lerNovasMensagens();
    }
  }, [mensagens.length]);

  const lerNovasMensagens = () => {
    scrollBottom();
    mensagens.forEach(mensagem => {
      mensagem.lida = true;
    });
    setMensagens([...mensagens]);
  };

  return (
    <div id="mensagens" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-purple scrollbar-thumb-rounded scrollbar-track-indigo-lighter scrollbar-w-2 scrolling-touch">
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
      {
        !endOfScroll ? (
          <ChatMessageListBottomScrollButton
            onClick={() => lerNovasMensagens()}
            naoLidos={mensagens.filter(m => !m.lida).length}
          />
        ) : <></>
      }
    </div>
  );
}