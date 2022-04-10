import { useEffect, useRef, useState } from 'react'
import { Combobox } from '@headlessui/react'
import { Pessoa } from '../../types/Pessoa'
import { ComboboxItens } from '../../components/ComboboxItens';

export function CampoDeBusca() {
  const [pessoas, setPessoas] = useState<Pessoa[]>([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)

  const buscaPessoas = async () => {
    setLoading(true);
    const response = await fetch(`http://localhost:3001/pessoas?nome=${query}`);
    const lista = await response.json();
    setPessoas(lista);
    setLoading(false);
  };

  useEffect(() => {
    buscaPessoas();
  }, [query]);

  return (
    <div className="py-12 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl mb-2 text-color text-purple-600">{`${ pessoas.length } registros encontrados`}</h1>
      <Combobox
        as="div"
        className="mx-auto max-w-xl transform rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
        value={query}
        onChange={setQuery}
      >
        <Combobox.Input
          className="w-full rounded-md border-0 bg-gray-100 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder=""
          onChange={(event) => setQuery(event.target.value)}
        />

        <ComboboxItens
          query={query}
          pessoas={pessoas}
          loading={loading}
        />
      </Combobox>
    </div>
  )
}