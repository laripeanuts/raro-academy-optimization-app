import { Pessoa } from "../../types/Pessoa";
import { Carregando } from "../Carregando";
import { ListaPessoas } from "../ListaPessoas";
import { ResultadosNaoEncontrados } from "../ResultadosNaoEncontrados";

type ComboboxItensProps = {
  query: string;
  loading: boolean
  pessoas: Pessoa[],
}

export const ComboboxItens: React.FC<ComboboxItensProps> = ({
  query,
  loading,
  pessoas,
}) => {
  if (loading) {
    return <Carregando />
  }

  if (query && pessoas.length === 0) {
    <ResultadosNaoEncontrados />
  }

  return (
    <ListaPessoas pessoas={pessoas} />
  )
};