import { Relogio } from '../../components/Relogio';
import { ListaProdutos } from '../../components/ListaProdutos';
import { HistoricoDeCompras } from '../../components/HistoricoDeCompras';
import { MarketPlaceProvider } from '../../contexts/marketPlace.context';


export function MarketPlace() {
  return (
    <MarketPlaceProvider>
      <div className="my-20 mx-10">
        <Relogio />
        <ListaProdutos />
        <HistoricoDeCompras />
      </div>
    </MarketPlaceProvider>
  )
}