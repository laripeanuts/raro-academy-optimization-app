import { Pessoa } from "./Pessoa";
import { Produto } from "./Produto";

export interface Compra {
  id: string;
  comprador: Pessoa;
  data: Date;
  produto: Produto;
}