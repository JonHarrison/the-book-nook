import {Navbar, Nav, Container } from "react-bootstrap"; 

export const NavbarBootstrap = () => {
    return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
    )
}



function Navbar() {
    return ( <>
    <h1>This is a test</h1>
    </>
    )
}

export default Navbar;





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