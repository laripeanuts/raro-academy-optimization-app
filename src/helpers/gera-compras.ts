import faker from "@faker-js/faker";
import { Compra } from '../types/Compra';
import { geraPessoas } from './gera-pessoa';
import { geraProdutos } from './gera-produtos';

export const geraCompras = (quantidade: number): Compra[] =>
  Array.from(new Array(quantidade)).map(() => ({
    id: faker.datatype.uuid(),
    comprador: geraPessoas(1)[0],
    data: faker.date.past(),
    produto: geraProdutos(1)[0]
  }));