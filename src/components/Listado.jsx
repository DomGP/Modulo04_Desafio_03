import Table from 'react-bootstrap/Table';

const Listado = () => {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>{}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Listado