import { CheckCircleIcon } from "@heroicons/react/solid";
import { formataData, formataHora } from "../../helpers/formatters";
import { Compra } from "../../types/Compra";

interface RegistroDeCompraProps {
  compra: Compra;
}
export const RegistroDeCompra: React.FC<RegistroDeCompraProps> = ({ compra }) => {
  return (
    <div className="bg-gray-50 shadow overflow-hidden sm:rounded-md my-2">
      <ul className="divide-y divide-gray-200">
        {/* {applications.map((application) => ( */}
          <li key={compra.comprador.email}>
            <a href={compra.comprador.email} className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full" src={compra.comprador.foto} alt="" />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="text-sm font-medium text-indigo-600 truncate">{compra.comprador.nome}</p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        {/* <CurrencyDollarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                        <span className="truncate">{compra.comprador.email}</span>
                      </p>
                    </div>
                    <div className="hidden md:block">
                      <div>
                        <p className="text-sm text-gray-900">
                          {compra.produto.nome}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                          Comprado&nbsp;
                          <time dateTime={formataData(compra.data)}>{formataData(compra.data)}</time>
                          &nbsp;às&nbsp;
                          <time dateTime={formataHora(compra.data)}>{formataHora(compra.data)}</time>
                        </p>
                      </div>
                    </div>
                    <div />
                  </div>
                </div>
              </div>
            </a>
          </li>
        {/* ))} */}
      </ul>
    </div>
  )
};