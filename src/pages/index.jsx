import Link from "next/link"
import Navegador from "../components/Navegador"

export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexWrap: 'wrap',
      margin: '10px'
    }}>
      <Navegador destino="/estilo" name='Estilo'/>
      <Navegador destino="/exemplo" name="Exemplo"/>
      <Navegador destino="/jsx" name="JSX"/>
      <Navegador destino="/navegacao" name="Navegação #01"/>
      <Navegador destino="cliente/123" name="Navegação #02"/>
      <Navegador destino="/estado" name="Componente com Estado"/>
    </div>
  )
}
