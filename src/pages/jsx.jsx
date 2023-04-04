
import Layout from '../components/Layout'

export default function Jsx() {
    const titulo = <h1>JSX é um conceito Central</h1>

    function subititulo(){
        return <h2>{"Muito Legal".toLocaleLowerCase()}</h2>
    }

    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                {titulo}
                {subititulo()} {/* Aqui estou invocando a função */}
                <p>
                    {JSON.stringify({nome: 'João', idade: 30})} {/* dois par de chaves representa um objeto */}
                </p>
            </div>
        </Layout>
    )
}