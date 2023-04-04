import Link from "next/link";
import styles from "../styles/Navegador.module.css"
export default function Navegador(props){
    return(
        <Link style={{margin: '10px'}} href={props.destino}>
            <div className={styles.navegador}>
                <span> {props.name}</span>
            </div>
        </Link>
    )
}