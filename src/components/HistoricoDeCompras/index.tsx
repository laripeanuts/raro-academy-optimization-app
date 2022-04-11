import { useMarketplace } from "../../contexts/marketPlace.context";
import { RegistroDeCompra } from "../RegistroDeCompra";

export const HistoricoDeCompras = () => {
  const { compras } = useMarketplace();

  return (
    <div className="py-12 sm:px-6 lg:px-8 shadow-2xl my-5 rounded-2xl">
      <h1 className="text-center text-gray-500 text-2xl font-medium mb-10">
        Histórico de compras
      </h1>
      <div className="mx-20">
        {
          compras && compras.map((compra) => (
            <RegistroDeCompra key={compra.id} compra={compra} />
          ))
        }
      </div>
    </div>
  );
};