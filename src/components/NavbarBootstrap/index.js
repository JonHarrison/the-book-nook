import {Navbar, Nav, Container } from "react-bootstrap"; 

const NavbarBootstrap = () => {
    return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">The Book Nook</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Log in</Nav.Link>
            <Nav.Link href="#pricing">Personal library</Nav.Link>
            <Nav.Link href="#pricing">Search??</Nav.Link>
            <Nav.Link href="#pricing">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarBootstrap;





// export default function Navbar() {
//     return <nav className="nav">
//         <a href="/" className="Site Name">The Book Nook</a>
//         <ul>
//         <a href="/" className="Site login">sign up/ log in </a>
//         </ul>
//         <ul>
//         <a href="/" className="Site login">sign up/ log in </a>
//         </ul>
//         <ul>
//         <a href="/" className="Site login">sign up/ log in </a>
//         </ul>
//     </nav>
// }