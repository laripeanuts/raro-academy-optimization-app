import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useChat } from "../../contexts/chat.context";
import { useScroll } from "../../hooks/useScroll";
import { Button } from "../Button";
import { ChatMessage } from "../ChatMessage";
import { ChatMessageListBottomScrollButton } from "../ChatMessageListBottomScrollButton";
import { MyChatMessage } from "../MyChatMessage";
import "./style.css";

// número totalmente arbitrário...
const TAMANHO_MEDIO_MENSAGEM_PX = 300;
export const ChatMessageList = () => {
  const scrollRef: MutableRefObject<Element | null> = useRef(null);
  const { mensagens, buscaMensagem, setMensagens } = useChat();
  const {
    scrollBottom,
    endOfScroll,
    updateEndOfScroll,
    getDistanceFromBottom,
  } = useScroll(scrollRef);
  const [renderMensagens, setRenderMensagens] = useState([...mensagens]);
  const [numMensagens, setNumMensagens] = useState(50);

  useEffect(() => {
    scrollRef.current = document.querySelector("#mensagens");
    lerNovasMensagens();
  }, []);

  useEffect(() => {
    updateEndOfScroll();
  }, [mensagens, updateEndOfScroll]);

  useEffect(() => {
    const novaMensagem = mensagens[0];
    const distanceFromBottom = getDistanceFromBottom();
    const lerProximaMensagem = distanceFromBottom < TAMANHO_MEDIO_MENSAGEM_PX;
    const minhaMensagem = novaMensagem?.autor.usuarioAtual;

    if (minhaMensagem || lerProximaMensagem) {
      lerNovasMensagens();
    }
  }, [mensagens.length]);

   useEffect(() => {
     setRenderMensagens([...mensagens].splice(-numMensagens, numMensagens));
     endOfScroll && scrollBottom();
   }, [mensagens, numMensagens]);
  
  const lerNovasMensagens = () => {
    scrollBottom();
    mensagens.forEach((mensagem) => {
      mensagem.lida = true;
    });
    setMensagens([...mensagens]);
  };

  return (
    <div className="chat">
      <div
        id="mensagens"
        className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-purple scrollbar-thumb-rounded scrollbar-track-indigo-lighter scrollbar-w-2 scrolling-touch"
      >
      <Button
        onClick={() => setNumMensagens(numMensagens + 10)}
        className="flex"
      >
        Ver mais mensagens
      </Button>
        {[...renderMensagens]
          .filter((mensagem) =>
            mensagem.texto.match(new RegExp(buscaMensagem, "i")),
          )
          .map((mensagem) =>
            mensagem.autor.usuarioAtual ? (
              <MyChatMessage key={mensagem.id} mensagem={mensagem} />
            ) : (
              <ChatMessage key={mensagem.id} mensagem={mensagem} />
            ),
          )}

        {!endOfScroll ? (
          <ChatMessageListBottomScrollButton
            onClick={() => lerNovasMensagens()}
            naoLidos={mensagens.filter((m) => !m.lida).length}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
