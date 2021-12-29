import styles from '../styles/Estiloso.module.css'
import Layout from '../componentes/Layout'
export default function Estiloso(){
    return(
        <Layout titulo="Exemplo CSS Modularizado">
        <div className="{styles.roxo}">
            <h1>Estilo usando CSS Módulos</h1>
        </div>
        </Layout>
    )
}