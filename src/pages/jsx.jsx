import Link from "next/link"
export default function Jsx() {
    const titulo = <h1>JSX é um conceito Central</h1>

    function subititulo(){
        return <h2>{"Muito Legal".toLocaleLowerCase()}</h2>
    }

    return (
        <div>
            {titulo}
            {subititulo()} {/* Aqui estou invocando a função */}
            <p>
                {JSON.stringify({nome: 'João', idade: 30})} {/* dois par de chaves representa um objeto */}
            </p>
            <Link href="/">Inicio</Link>
        </div>
    )
}