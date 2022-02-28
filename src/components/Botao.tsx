interface BotaoProps {
    className?: string
    children: any
    onClick? : () => void
    from?: string
    to?: string
}

export default function Botao( props: BotaoProps ){

    return (
        <button  
        onClick={props.onClick}
        className={`
        bg-gradient-to-r ${props.from} ${props.to}
        text-white px-4 py-2 rounded-md mb-4 ${props.className}
        ` }> 
            {props.children}
        </button>
    )
}