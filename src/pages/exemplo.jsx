import Cabeacalho from "../components/Cabecalho";
import Link from "next/link";

export default function exemplo(){
    return(
        <div>
            <Cabeacalho titulo="Next.js & React" />
            <Cabeacalho titulo="Aprenda Next na prática" />
            <Link href="/jsx">JSX</Link>
        </div>
    )
}