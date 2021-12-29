import Link from 'next/link'
import Navegador from '../componentes/Navegador'
export default function Home(){
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino ="/estiloso" />
            <Navegador texto="Exemplo" destino ="/exemplo" cor="#9400d3" /> 
            <Navegador texto="JSX" destino ="/jsx" cor="crimson" /> 
        </div>
    )
}