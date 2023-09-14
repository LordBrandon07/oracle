import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MyOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Colaborador from './componentes/Colaborador';
import Footer from './componentes/Footer';

const equipos = [

  {
    titulo:"Programación",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9"
  },
  {
    titulo:"Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF"
  },
  {
    titulo:"Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2"
  },
  {
    titulo:"Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8"
  },
  {
    titulo:"UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5"
  },
  {
    titulo:"Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9"
  },
  {
    titulo:"Innovación y Gestión",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF"
  },

]


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{

    equipo: "Front End",
    foto:"https://cdn140.picsart.com/362875794052211.png?to=crop&type=webp&r=1456x1517&q=85",
    nombre: "McLovin",
    puesto:"Fuck Boy",},

  {
    // id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    // id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/danisiliente.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    // id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    // id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    // id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"

  }])
  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {
    console.log("new", colaborador)
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = () => {
    console.log("delete")
  }

  return (
    <div>
      <Header/>
      {/* {mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)}/> : <div></div>} */}
      {
        mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador = {registrarColaborador}
        />
      }   
      <MyOrg cambiarMostrar={cambiarMostrar}/>

      {
        // equipos.map((equipo) => {
        //   return <Equipo datos={equipo} key={equipo.titulo}/>
        // })
        equipos.map((equipo) =><Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        />) //usar map sin return, en arrow function si no se usan llaves lo que sigue es el resultado
      }

      <Footer/>

    </div>
  );
}

export default App;
