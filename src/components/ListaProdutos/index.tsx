import faker from "@faker-js/faker";
import { useMarketplace } from "../../contexts/marketPlace.context";
import { geraPessoas } from "../../helpers/gera-pessoa";
import { Compra } from "../../types/Compra";
import { Produto } from "../../types/Produto";
import { CardProduto } from "../CardProduto";

export const ListaProdutos = () => {
  const {
    produtos,
    atualizaProduto,
    adicionaCompra
  } = useMarketplace();

  const registraCompra = (produto: Produto): Compra => {
    return {
      id: faker.datatype.uuid(),
      produto,
      data: new Date(),
      comprador: geraPessoas(1)[0]
    }
  }

  const comprarProduto = (produtoComprado: Produto) => {
    if (produtoComprado.quantidade > 0) {
      produtoComprado.quantidade--;
      atualizaProduto(produtoComprado);
      adicionaCompra(registraCompra(produtoComprado));
    }
  };

  return (
    <div className="py-12 sm:px-6 lg:px-8 shadow-2xl my-5 rounded-2xl">
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Produtos
      </h2>
      <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {produtos.map((produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
            onClick={comprarProduto}
          />
        ))}
      </ul>
    </div>
  );
}