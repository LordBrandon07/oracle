import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MyOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Colaborador from './componentes/Colaborador';

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
  const [colaboradores, actualizarColaboradores] = useState([])
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
        equipos.map((equipo) =><Equipo datos={equipo} key={equipo.titulo}/>) //usar map sin return, en arrow function si no se usan llaves lo que sigue es el resultado
      }

    </div>
  );
}

export default App;
