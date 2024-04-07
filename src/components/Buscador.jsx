// Buscador.jsx
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const Buscador = ({ datos, setDatos }) => {
    const [busqueda, setBusqueda] = useState('');

    const buscar = (e) => {
        setBusqueda(e.target.value);
    };

    useEffect(() => {
        const filteredData = datos.filter(colaborador =>
            colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase())
        );
        setDatos(filteredData);
        
        // Restablecer los datos completos si la búsqueda está vacía
        if (busqueda.trim() === '') {
            setDatos(datos);
        }
    }, [busqueda, datos, setDatos]);

    return (
        <>
            <Form.Control
                className='mb-3 buscadorStyle'
                type="text"
                placeholder="Ingresa un nombre"
                value={busqueda}
                onChange={buscar}
            />
        </>
    );
};

export default Buscador;

