import Form from 'react-bootstrap/Form';

const Buscador = ({datos}) => {
    
    const buscarColaborador = (e) =>{
        const filtro = e.target.value.toLowerCase();
        const datosFiltrados = datos.filter(
            (element) => element.nombre.toLowerCase().includes(filtro)
        )
        console.log(datosFiltrados)
    }
    return (
        <>
            <Form.Control
                className='mb-3 buscadorStyle'
                type="text" 
                placeholder="Ingresa un nombre" 
                onChange={buscarColaborador}/>
        </>
    )
}

export default Buscador