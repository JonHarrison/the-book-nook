import {Navbar, Nav, Container } from "react-bootstrap"; 

const AppNavbar = () => {
    return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">The Book Nook</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Log in</Nav.Link>
            <Nav.Link href="#personal">Personal library</Nav.Link>
            <Nav.Link href="#search">Search??</Nav.Link>
            <Nav.Link href="#contact">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;




