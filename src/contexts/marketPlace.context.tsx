import React, { createContext, useContext, useEffect } from "react";
import { geraProdutos } from "../helpers/gera-produtos";
import { Compra } from "../types/Compra";
import { Produto } from "../types/Produto";

export type MarketPlaceContextProps = {
  data: Date;
  produtos: Produto[];
  compras: Compra[];

  atualizaProduto: (produto: Produto) => void;
  adicionaCompra: (compra: Compra) => void;
  setData: (data: Date) => void;
}

const MarketPlaceContext = createContext<MarketPlaceContextProps>({
  data: new Date(),
  produtos: [],
  compras: [],
  setData: (data: Date) => {},
  atualizaProduto: (produto: Produto) => {},
  adicionaCompra: (compra: Compra) => {},
});

export const MarketPlaceProvider: React.FC = ({ children }) => {
  const [data, setData] = React.useState(new Date());
  const [produtos, setProdutos] = React.useState<Produto[]>([]);
  const [compras, setCompras] = React.useState<Compra[]>([]);

  useEffect(() => {
    setProdutos(geraProdutos(10));
  }, []);

  const atualizaProduto = (produto: Produto) => {
    const produtoIndex = produtos.findIndex(p => p.id === produto.id);
    if (produtoIndex >= 0) {
      const produtosAtualizados = [...produtos];
      produtosAtualizados[produtoIndex] = produto;
      setProdutos(produtosAtualizados);
    }
  }

  const adicionaCompra = (compra: Compra) => {
    setCompras([
      compra,
      ...compras
    ]);
  }

  return (
    <MarketPlaceContext.Provider
      value={{
        data,
        produtos,
        compras,
        setData,
        atualizaProduto,
        adicionaCompra,
      }}
    >
      {children}
    </MarketPlaceContext.Provider>
  );
};

export const useMarketplace = () => {
  const context = useContext(MarketPlaceContext);

  if (!context) {
    throw new Error('Você somente pode usar este hook debaixo de um <AuthContextProvider>');
  }

  return context;
};