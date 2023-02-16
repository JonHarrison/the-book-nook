import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../assets/logos/BookStoreLogo.png"

import "./style.css"

const AppNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="Brand logo" />
          </Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link href="#features">Log in</Nav.Link>
            <Nav.Link href="#personal">Personal library</Nav.Link>
            <Nav.Link href="#contact">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;




