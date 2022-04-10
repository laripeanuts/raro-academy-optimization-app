import { UsersIcon } from "@heroicons/react/outline";

export const ResultadosNaoEncontrados = () => (
  <div className="py-14 px-4 text-center sm:px-14">
    <UsersIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
    <p className="mt-4 text-sm text-gray-900">Não encontramos resultados.</p>
  </div>
);