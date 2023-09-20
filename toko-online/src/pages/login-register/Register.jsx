import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import '../css/login.css'

const Register = () => {
  return (
    <div>
      <div className="back d-flex">
        <Container>
          <img src="https://i.postimg.cc/NjjdW4GQ/coffee.png" width={740} alt="" className="gambar" />
        </Container>
        <Container className="">
          <Row className="justify-content-center align-items-center h-100">
            <Col className="col-6 ">
              <h1>Register</h1>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Username or email" className="mb-2" />
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" className="mb-3" />
              <div>
                <Button variant="dark" type="submit" className=" mb-2 w-100 " href="/">Daftar</Button>
              </div>
              <span className="forgot">Sudah punya akun ? <a href="/">Login</a></span>
            </Col>
          </Row>
        </Container>
      </div>
      <footer className='rb'>
        <div className="container-2">
          <div className="foot-menu" style={{ marginBottom: '1rem' }}>
            <a href="" style={{ marginRight: '10px' }}>About</a>
            <a href="">Help</a>
          </div>
          <p style={{ color: '#ffffff' }}>&copy; 2023 - Afacyaa.</p>
        </div>
      </footer>
    </div>
  )
}

export default Register