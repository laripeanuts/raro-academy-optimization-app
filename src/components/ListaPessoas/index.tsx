import { Combobox } from "@headlessui/react";
import { Pessoa } from "../../types/Pessoa";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

type ListaPessoasProps = {
  pessoas: Pessoa[],
}
export const ListaPessoas: React.FC<ListaPessoasProps> = ({ pessoas }) => (
  <Combobox.Options
    static
    className="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
  >
    {pessoas.map((pessoa) => (
      <Combobox.Option
        key={pessoa.id}
        value={pessoa}
        className={({ active }) =>
          classNames(
            'cursor-default select-none rounded-md px-4 py-2',
            active && 'bg-indigo-600 text-white'
          )
        }
      >
        {pessoa.nome}
      </Combobox.Option>
    ))}
  </Combobox.Options>
);
