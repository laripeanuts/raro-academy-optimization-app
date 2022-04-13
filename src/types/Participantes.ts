import { Pessoa } from "./Pessoa";

export type ParticipanteChat = Pessoa & { ativo: boolean, usuarioAtual: boolean }