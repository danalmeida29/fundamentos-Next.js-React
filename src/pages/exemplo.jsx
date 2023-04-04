import Cabeacalho from "../components/Cabecalho";
import Layout from '../components/Layout'

export default function exemplo(){
    return(
        <Layout titulo="Usando Componentes">
            <div>
                <Cabeacalho titulo="Next.js & React" />
                <Cabeacalho titulo="Aprenda Next na prática" />
            </div>
        </Layout>
    )
}