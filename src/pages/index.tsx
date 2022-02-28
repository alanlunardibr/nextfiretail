import type { NextPage } from 'next'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'

import useClientes from '../hooks/useClientes'

const Home: NextPage = () => {

  const { cliente, clientes, 
    novoCliente, selecionarCliente, salvarCliente,
    excluirCliente, tabelaVisivel, exibirTabela} = useClientes()


  return (
    <div className={`
    flex justify-center items-center h-screen bg-gradient-to-r 
    from-blue-300 to-blue-700
    text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        {tabelaVisivel ? (
          <>
            <div className='flex justify-end'>
              <Botao
                from='from-blue-300'
                to='to-blue-500'
                onClick={novoCliente}>
                Incluir
              </Botao>
            </div>
            <Tabela clientes={clientes} clienteSelec={selecionarCliente} clienteExcluido={excluirCliente} />
          </>
        ) : (
          <Formulario 
          cliente={cliente} 
          clienteMudou={salvarCliente}
          cancelado={ exibirTabela}/> 
        )}

      </Layout>
    </div>
  )
}

export default Home
