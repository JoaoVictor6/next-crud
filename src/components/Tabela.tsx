import Client from "../core/Client";
import { EditIcon, TrashIcon } from "./icones";

type TabelaProps = {
  clientes: Client[];
  clienteSelecionado?: (cliente: Client) => void;
  clienteExcluido?: (id: string) => void;
}

export default function Tabela({clientes, clienteExcluido, clienteSelecionado}: TabelaProps){
  const exibirAcoes = clienteSelecionado || clienteExcluido

  const renderizarCabecalho = () => {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {exibirAcoes ? <th className="p-4">Ações</th> : false}
      </tr>
    )
  }

  const renderizarDados = () => {
    return clientes?.map((cliente, index) => (
        <tr key={cliente.id}
          className={index % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
        >
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4">{cliente.idade}</td>
          {RenderizarBotao(cliente.id, cliente)}
        </tr>
      )
    )
  }


  const RenderizarBotao = (id:string, cliente: Client) => {
    return(
      <td className="flex justify-center">
        {clienteSelecionado ? (
          <button 
          onClick={() => clienteSelecionado?.(cliente)}
          className={`
            flex justify-center items-center
            text-green-600 rounded-full p-2 m-1
            hover:bg-purple-50
          `}>
            {EditIcon}
          </button>
        ) : false}
        {clienteExcluido ? (
          <button 
          onClick={() => clienteExcluido?.(id)}
          className={`
            flex justify-center items-center
            text-red-500 rounded-full p-2 m-1
            hover:bg-purple-50
          `}>
            {TrashIcon}
          </button>
        ) : false}
      </td>
    )
  }
  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        bg-gradient-to-r from-purple-500 to-purple-800
        text-gray-100
      `}>
        {renderizarCabecalho()}
      </thead>
      <tbody>
        {renderizarDados()}
      </tbody>
    </table>
  )
}