import Table from 'react-bootstrap/Table';

const Listado = ({datos}) => {
    return (
        <>
            <Table 
                striped 
                bordered 
                hover
                className='listadoStyle'
                >
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map(dato => (
                        <tr key = {dato.id}>
                            <td>{dato.id}</td>
                            <td>{dato.nombre}</td>
                            <td>{dato.correo}</td>
                            <td>{dato.edad}</td>
                            <td>{dato.cargo}</td>
                            <td>{dato.telefono}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </Table>
        </>
    )
}

export default Listado