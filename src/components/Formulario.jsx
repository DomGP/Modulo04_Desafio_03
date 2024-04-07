import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alerta from './Alerta';

import {useState} from 'react'


const Formulario = ({onAgregar,iconAlertaError, iconAlertaExito, messageAlert, setMensaje}) => {

    //ESTADOS DEL FORMULARIO
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [edad, setEdad] = useState('')
    const [cargo, setCargo] = useState('')
    const [telefono, setTelefono] = useState('')

    const [errorVacio, setErrorVacio] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [correcto, setCorrecto] = useState(false)
    
    const generarIdUnico = () => {
        return Math.floor(Math.random() * 100);
    }

    const agregarFormulario = (e) => {
        e.preventDefault()
        const nuevoColaborador = {
            id:generarIdUnico(),
            nombre,
            correo,
            edad,
            cargo,
            telefono
        };
        setErrorVacio(false);
        setCorrecto(false);
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(nombre === '' || correo === '' || edad === '' || cargo === '' || telefono === ''){
            setErrorVacio(true)
            setCorrecto(false)
            setMensaje('Todos los campos son obligatorios')
            return
        }
        onAgregar(nuevoColaborador)
        setMensaje('El registro ha sido exitoso')
        setCorrecto(true)
        setErrorVacio(false)
        
        // Limpiar los campos después de agregar el colaborador
        setNombre('');
        setCorreo('');
        setEdad('');
        setCargo('');
        setTelefono('');
        /* const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(nombre === '' || email === '' || edad === '' || cargo === '' || telefono === ''){
            alert('Todos los campos son obligatorios')

            return
        }
        alert('El ingreso a sido exitoso') */
    }

    return (
        <>
            <div /* className="form-container" */>
                <Form 
                    className='formStyle'
                    onSubmit={agregarFormulario}>
                    <Form.Group 
                        className="mb-3">
                        <Form.Control 
                            className="inputShort mb-3" 
                            type="name" 
                            placeholder="Nombre del colaborador"
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)}/>
                            <Form.Control 
                            className="inputShort mb-3"  
                            type="email" 
                            placeholder="Email del colaborador" 
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}/>
                            <Form.Control 
                            className="inputShort mb-3" 
                            type="number" 
                            placeholder="Edad del colaborador" 
                            value={edad}
                            onChange={(e) => setEdad(e.target.value)}/>
                            <Form.Control 
                            className="inputShort mb-3" 
                            type="text" 
                            placeholder="Cargo del colaborador"
                            value={cargo} 
                            onChange={(e) => setCargo(e.target.value)}/>
                            <Form.Control 
                            className="inputShort mb-3" 
                            type="number" 
                            placeholder="Teléfono del colaborador" 
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}/>
                    </Form.Group>

                    <Button 
                        className='buttonStyle' 
                        type="submit">
                        Agregar colaborador
                    </Button>
                    {errorVacio ? <Alerta 
                        colorAlert = 'danger'
                        iconAlerta = '/assets/imgs/iconError.svg'
                        messageAlert= {messageAlert}/> : null}
                    {correcto ? <Alerta 
                        colorAlert = 'success'
                        iconAlerta = '/assets/imgs/iconCheck.svg'
                        messageAlert = {messageAlert}/> : null}
                </Form>
            </div>
        </>
    )
}

export default Formulario