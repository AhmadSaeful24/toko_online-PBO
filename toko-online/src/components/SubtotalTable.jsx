import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SubtotalTable() {
    return (
        <div style={{marginTop:"-65rem", marginBottom:"57rem"}}>
            <Card style={{ width: "40rem", marginLeft: "50rem" }}>
                <Card.Header>Detail Pesanan</Card.Header>
                <Card.Body>
                    <h4 style={{marginBottom:"6px"}}>Opsi Pengiriman</h4>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text style={{marginBottom:"15px"}}>With supporting text below as a natural lead-in</Card.Text>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text style={{marginBottom:"15px"}}>With supporting text below as a natural lead-in</Card.Text>
                    <Button variant="primary" style={{width:"20rem"}}>Buat Pesanan</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SubtotalTable;