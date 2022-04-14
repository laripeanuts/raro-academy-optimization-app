import { ParticipanteChat } from "./Participantes";

export type Mensagem = {
  id: string;
  texto: string;
  autor: ParticipanteChat;
  data: Date;
  lida: boolean;
}