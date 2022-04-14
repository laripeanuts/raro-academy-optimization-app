import faker from "@faker-js/faker";
import { Produto } from "../types/Produto";

const colors = [
  'bg-pink-600',
  'bg-indigo-600',
  'bg-yellow-500',
  'bg-green-500',
];
const makeIndex = (arr: unknown[]) => Math.floor((Math.random() * 10) % arr.length);

export const geraProdutos = (quantidade: number): Produto[] =>
  Array.from(new Array(quantidade)).map(() => ({
    id: faker.datatype.uuid(),
    nome: faker.commerce.productName(),
    bgColor: colors[makeIndex(colors)],
    iniciais: faker.hacker.abbreviation(),
    valor: faker.datatype.number({ min: 1, max: 10 }),
    quantidade: faker.datatype.number({ min: 1, max: 20 }),
  }))