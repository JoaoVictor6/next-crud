import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Client from "../core/Client";

export default function Home() {
  const clientes = [
    new Client('Ana', 17, '1'),
    new Client('João', 18, '2'),
    new Client('Bel', 17, '3')
  ]

  const clienteSelecionado = (id) => {

  }

  const clienteExcluido = (id) => {

  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro simples">
        <Tabela 
          clientes={clientes}
          clienteExcluido={clienteExcluido}
          clienteSelecionado={clienteSelecionado}
        />
      </Layout>
    </div>
  )
}
