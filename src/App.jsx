import { useState } from 'react'

import { BaseColaboradores } from './BaseColaboradores'

import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Listado from './components/Listado'
import Header from './components/Header';
import Subtitle from './components/Subtitle';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';

function App() {
  const [datos, setDatos] = useState(BaseColaboradores);
  /* const [datosFiltrados, setDatosFiltrados] = useState([]) */
  const [mensaje, setMensaje] = useState('')

  const agregarColaborador = (nuevoColaborador) => {
    setDatos([...datos, nuevoColaborador])
  }
  
  return (
    <>
      <Header
        textTitle = 'Lista de Colaboradores'/>
      <Buscador 
          datos = {datos}
          setDatos = {setDatos}/>
      <div className="container-fluid">
        <div className='row'>
          <div className='col-md-8 col-lg-9 col-xl-9'>
            <div className='table-responsive'>
              <Listado 
                className = "col-md-9"
                datos = {datos} />
            </div>
          </div>
          <div className='cold-md-4 col-lg-3 col-lx-3'>
            <div>
              <Subtitle 
                textSubtitle = 'Agregar Colaborador'/>
              <Formulario 
                onAgregar = {agregarColaborador} 
                messageAlert = {mensaje}
                setMensaje = {setMensaje}/>
            </div>
            </div>
        </div>
      </div>
          
    </>
  )
}

export default App
