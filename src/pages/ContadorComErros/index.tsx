import faker from "@faker-js/faker";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";

const Error: React.FC = ({ children }) => {
  console.log('===== renderiza erro', children);
  return (
    <h1 className="text-center text-red-500 text-base font-medium">
      { children }
    </h1>
  )
}

type ErroDoContador = {
  id: string;
  erro: string;
}

export const ContadorComErros = () => {
  const [contador, setContador] = useState(0);
  const [erros, setErros] = useState<ErroDoContador[]>([]);

  useEffect(() => {
    if (contador < 0) {
      setErros([
        {
          id: faker.datatype.uuid(),
          erro: 'Contador não pode ser menor que zero',
        },
        ...erros,
      ]);
    }

    if (contador > 10) {
      setErros([
        {
          id: faker.datatype.uuid(),
          erro: 'Contador não pode ser maior que dez',
        },
        ...erros,
      ]);
    }
  }, [contador]);

  const incrementa = () => {
    setContador(contador + 1);
  }

  const decrementa = () => {
    setContador(contador - 1);
  }

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-2xl sm:rounded-lg sm:px-10">
          <h1 className="text-center text-gray-500 text-2xl font-medium uppercase">
            { contador }
          </h1>
          <div className="mt-2">
            <div className="flex justify-between space-x-2">
              <Button onClick={ decrementa }>{ `<` }</Button>
              <Button onClick={ incrementa }>{ `>` }</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        {
          erros.map(error => (
            <Error key={error.id}>{ error.erro }</Error>
          ))
        }
      </div>
    </div>
  );
}