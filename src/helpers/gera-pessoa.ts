import faker from "@faker-js/faker";
import { Pessoa } from "../types/Pessoa";


export const geraPessoas = (quantidade: number): Pessoa[] =>
  Array.from(new Array(quantidade)).map(() => ({
    id: faker.datatype.uuid(),
    nome: faker.name.firstName(),
    email: faker.internet.email(),
    telefone: faker.phone.phoneNumber('(##) #####-####'),
    endereco: faker.address.streetAddress(),
    foto: faker.image.avatar()
  }));