import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? '')
    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-4" />
            ) : false}
            <Entrada
                className="mb-4"
                texto="Nome"
                valor={nome}
                valorMudou={setNome} />
            <Entrada
                texto="Idade"
                tipo="number" valor={idade} valorMudou={setIdade}
            />
            <div className="flex justify-end mt-7">
                <Botao
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
                    from='from-green-500'
                    to='to-green-800'>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao from='from-gray-300' to='to-gray-500' onClick={props.cancelado}>Cancelar</Botao>

            </div>
        </div>
    )
}