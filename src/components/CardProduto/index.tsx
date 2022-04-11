import { classNames } from "../../helpers/classNames";
import { formataMoeda } from "../../helpers/formatters";
import { Produto } from "../../types/Produto";

type CardProdutoProps = {
  produto: Produto;
  onClick: (produto: Produto) => void;
}

export const CardProduto: React.FC<CardProdutoProps> = ({
  produto,
  onClick,
}) => {
  return (
    <li
      key={produto.nome}
      className="col-span-1 flex shadow-sm rounded-md cursor-pointer"
      onClick={() => onClick(produto)}
    >
      <div
        className={classNames(
          produto.bgColor,
          'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
        )}
      >
        {produto.iniciais}
      </div>
      <div className="flex-1 flex items-center justify-between border-t border-r border-b bg-white rounded-r-md truncate hover:bg-gray-50">
        <div className="flex-1 px-4 py-2 text-sm truncate">
          <p className="text-gray-900 font-medium hover:text-gray-600 truncate">
            {produto.nome}
          </p>
          <p className="text-gray-500">{formataMoeda(produto.valor)}</p>
          <p className="text-gray-500">{produto.quantidade} restantes</p>
        </div>
      </div>
    </li>
  );
};