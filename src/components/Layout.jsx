import Link from "next/link";
import styles from '../styles/Layout.module.css'


export default function Layout(props){
    return(
        <div className={styles.Layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titulo ?? 'Mais um exemplo'}</h1>
                <button>
                    <Link href='/'>Voltar</Link>
                </button>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    )
}