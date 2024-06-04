import './App.css';
import Titulo from './components/Titulo/Titulo';
import Subtitulo from './components/Subtitulo/Subtitulo';
import Cita from './components/Cita/Cita';
import Formulario from './components/Formulario/Formulario';
import { useState } from 'react';
function App(props) {
  const [citas, setCitas] = useState([]);
  return (
    <>
      <Titulo texto="ADMINISTRADOR DE PACIENTES" />
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Subtitulo texto="CREAR MI CITA" />
            <Formulario citas={citas} setCitas={setCitas}></Formulario>
          </div>
          <div class="one-half column">
            <Subtitulo texto="ADMINISTRA TUS CITAS" />
            <div class="lista-citas">
                  {citas.map(c => <div classname="cita"><Cita citas={citas} setCitas={setCitas} nombreMascota={c.mascota} nombreDueño={c.duenio} Fecha={c.fecha} Hora={c.hora} Sintomas={c.sintomas} id={c.id}></Cita></div>)}
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
