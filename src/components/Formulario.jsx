import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {useState} from 'react'

const Formulario = ({onAgregar}) => {

    //ESTADOS DEL FORMULARIO
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [edad, setEdad] = useState('')
    const [cargo, setCargo] = useState('')
    const [telefono, setTelefono] = useState('')

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
        onAgregar(nuevoColaborador)
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
            <Form 
                className='formStyle'
                onSubmit={agregarFormulario}>
                <Form.Group 
                    className="mb-3">
                    <Form.Control 
                        className="inputShort" 
                        type="name" 
                        placeholder="Nombre del colaborador"
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)}/>
                </Form.Group>

                <Form.Group 
                    className="mb-3">
                    <Form.Control 
                        className="inputShort"  
                        type="email" 
                        placeholder="Email del colaborador" 
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}/>
                </Form.Group>

                <Form.Group 
                    className="mb-3">
                    <Form.Control 
                        className="inputShort" 
                        type="number" 
                        placeholder="Edad del colaborador" 
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}/>
                </Form.Group>

                <Form.Group 
                    className="mb-3">
                    <Form.Control 
                        className="inputShort" 
                        type="text" 
                        placeholder="Cargo del colaborador"
                        value={cargo} 
                        onChange={(e) => setCargo(e.target.value)}/>
                </Form.Group>

                <Form.Group 
                    className="mb-3">
                    <Form.Control 
                        className="inputShort" 
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
            </Form>
        </>
    )
}

export default Formulario