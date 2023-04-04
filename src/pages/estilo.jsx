import styles from '../styles/Estilo.module.css'
import Layout from '../components/Layout'

export default function Estilo(){
    return (
        <Layout titulo="Exemplo de CSS modularizado">
            <div className={styles.crismon}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>

    )
}