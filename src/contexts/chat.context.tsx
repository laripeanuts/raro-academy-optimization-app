import faker from "@faker-js/faker";
import React, { createContext, useContext, useEffect, useState } from "react";
import { geraPessoas } from "../helpers/gera-pessoa";
import { Mensagem } from "../types/Mensagem";
import { ParticipanteChat } from "../types/Participantes";

const geraParticipante = (usuarioAtual = false): ParticipanteChat => ({
  ...geraPessoas(1)[0],
  ativo: true,
  usuarioAtual,
})

export type ChatContextProps = {
  mensagens: Mensagem[];
  setMensagens: (mensagens: Mensagem[]) => void;
  buscaMensagem: string;
  setBuscaMensagem: (buscaMensagem: string) => void;
  participantes: ParticipanteChat[];
  setParticipantes: (participantes: ParticipanteChat[]) => void;
  adicionaMensagem: (texto: string, participante: ParticipanteChat) => void;
}

const ChatContext = createContext<ChatContextProps>({
  mensagens: [],
  setMensagens: (_: Mensagem[]) => {},
  buscaMensagem: '',
  setBuscaMensagem: (_: string) => {},
  participantes: [],
  setParticipantes: (_: ParticipanteChat[]) => {},
  adicionaMensagem: (texto: string, participante: ParticipanteChat) => {},
});

export const ChatProvider: React.FC = ({ children }) => {
  const [ mensagens, setMensagens ] = useState<Mensagem[]>([]);
  const [ buscaMensagem, setBuscaMensagem ] = useState<string>('');
  const [ participantes, setParticipantes ] = useState<ParticipanteChat[]>([]);

  useEffect(() => {
    const participantes = [
      geraParticipante(false), // gera dados do usuário convidado.
      geraParticipante(true),  // gera dados do usuário atual.
    ];

    setParticipantes(participantes);
    const interval = setInterval(() => {
      const texto = faker.lorem.words(6);
      adicionaMensagem(texto, participantes[0]);
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, []);
  
  const adicionaMensagem = (texto: string, autor: ParticipanteChat) => {
    const mensagem: Mensagem = {
      id: faker.datatype.uuid(),
      texto,
      autor,
      data: new Date(),
    }

    setMensagens(mensagens => [ mensagem, ...mensagens ]);
  };

  return (
    <ChatContext.Provider
      value={{
        mensagens,
        setMensagens,
        buscaMensagem,
        setBuscaMensagem,
        participantes,
        setParticipantes,
        adicionaMensagem,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error('Você somente pode usar este hook debaixo de um <AuthContextProvider>');
  }

  return context;
};