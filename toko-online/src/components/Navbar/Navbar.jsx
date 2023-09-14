import { Container, Nav, Navbar, Form } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar style={{ background: "#6CADFF" }} className="shadow" fixed='top'>
      <Container position="relative">
        <Navbar.Brand style={{ fontFamily: "cursive", color: "white" }} href="/" className="fs-3 fw-bold">
          Toko-ku
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form.Control style={{ width: "30rem", marginLeft: "10%" }} type="text" placeholder="Carinya yang ada..." readOnly />
          <Nav style={{ marginLeft: "30%" }}>
            <Nav.Link href="#" style={{ color: "white" }}>
              <i className="fa fa-search"></i>
            </Nav.Link>
            <Nav.Link href="#" className="mx-3" style={{ color: "white" }}>
              <i className="fa-regular fa-user"></i>
            </Nav.Link>
            <Nav.Link href="/keranjang" style={{ color: "white" }}>
              <i class="fa-solid fa-cart-shopping"></i>
            </Nav.Link>
            <Nav.Link style={{ fontSize: "30px", marginTop: "-10px", color: "white" }} className="ms-4">
              <i class="bi bi-person-circle"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;
