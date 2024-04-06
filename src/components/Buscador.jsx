import Form from 'react-bootstrap/Form';

const Buscador = ({datos, setDatosFiltrados}) => {
    const buscarColaborador = (e) =>{
        const filtro = e.target.value.toLowerCase();
        const datosFiltrados = datos.filter(
            (element) => element.nombre.toLowerCase().includes(filtro)
        )
        setDatosFiltrados(datosFiltrados)
    }
    return (
        <>
            <Form.Control
                className='mb-3'
                type="text" 
                placeholder="Ingresa un nombre" 
                onChange={buscarColaborador}/>
        </>
    )
}

export default Buscador