
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar style={{ backgroundColor: "#fff159", color: "black" }}>
      <Container>
        <Navbar.Brand href="/"><Image src={"https://1000marcas.net/wp-content/uploads/2021/08/Mercado-Libre-Logo-2013.png"} style={{ width: "120px" }}></Image></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Productos</Nav.Link>
          <Nav.Link href="/nuevo">Nuevo instrumento</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;