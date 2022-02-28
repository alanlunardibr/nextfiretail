import Cliente from "../core/Cliente";
import { Edicao, Lixo } from "./Icones";

interface TabelaProps {
    clientes: Cliente[]
    clienteSelec?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exiberAcoes = props.clienteExcluido || props.clienteSelec

    function renderizarCab() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exiberAcoes ? <th className=" p-4">Ações</th> : false } 

            </tr>
        )
    }

    function renderizarAcoes(cliente: Cliente) {

        return (
            <td className="flex justify-center">
                {props.clienteSelec ? (
                    <button onClick={ () => props.clienteSelec?.(cliente) }
                        className={`
                    flex justify-center items-center text-green-600 rounded-full p-2 
                    m-1 hover:bg-purple-50` }>
                        {Edicao}
                    </button>
                ) : false}

                {props.clienteExcluido ? (
                    <button onClick={ () => props.clienteExcluido?.(cliente)} className={
                        `flex justify-center items-center text-red-600 rounded-full p-2 
                    m-1 hover:bg-purple-50
                    `
                    }>{Lixo}</button>
                ) : false}


            </td>
        )
    }
    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-blue-100' : 'bg-blue-300'} `}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exiberAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }
    return (

        <table className="w-full rounded-xl overflow-hidden">
            <thead className="text-gray-200 bg-gradient-to-r from-blue-300 to-blue-900">
                {renderizarCab()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>

        </table>
    )
}