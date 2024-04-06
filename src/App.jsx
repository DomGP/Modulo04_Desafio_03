import { useState } from 'react'

import { BaseColaboradores } from './BaseColaboradores'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Listado from './components/Listado'
import Header from './components/Header';
import Subtitle from './components/Subtitle';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';

function App() {
  const [datos, setDatos] = useState(BaseColaboradores);
  const [datosFiltrados, setDatosFiltrados] = useState([])

  const agregarColaborador = (nuevoColaborador) => {
    setDatos([...datos, nuevoColaborador])
  }
  
  return (
    <>
      <Header
        textTitle = 'Lista de Colaboradores'/>
      <Buscador 
        datos = {datos}
        setDatosFiltrados={setDatosFiltrados}/>
      <div className='flex'>

        <Listado 
          datos = {datosFiltrados.length > 0 ? datosFiltrados : datos} />
          <div>
            <Subtitle 
              textSubtitle = 'Agregar Colaborador'/>
            <Formulario onAgregar = {agregarColaborador} />
          </div>
      </div>
      
          
    </>
  )
}

export default App
