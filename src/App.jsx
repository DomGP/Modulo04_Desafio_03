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
      <div /* className="flex-container" */>
        <Buscador 
          datos = {datos}/>
        <div className='flex'>

          <Listado 
            datos = {datos} />
            <div /* className='form-container' */>
              <Subtitle 
                textSubtitle = 'Agregar Colaborador'/>
              <Formulario 
                onAgregar = {agregarColaborador} 
                messageAlert = {mensaje}
                setMensaje = {setMensaje}/>
            </div>
        </div>
        
      </div>
          
    </>
  )
}

export default App
