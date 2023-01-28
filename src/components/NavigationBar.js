import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/images/Logo.svg";

const NavigationBar = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div class="d-flex">
            <Nav className="me-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Support</Nav.Link>
              <Nav.Link href="#link">My Account</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
