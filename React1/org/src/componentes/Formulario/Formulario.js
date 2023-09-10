import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto.js"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () =>{

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("aaaaaaaa", e)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresa un nombre" required/>
            <CampoTexto titulo="Puesto" placeholder="Ingresa un puesto" required/>
            <CampoTexto titulo="Foto" placeholder="Ingresa un enlace de foto" required/>
            {/* <CampoTexto titulo="Equipo" placeholder="Ingresa un equipo"/> */}
            <ListaOpciones/>
            <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formulario