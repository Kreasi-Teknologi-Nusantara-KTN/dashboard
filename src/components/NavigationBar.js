import { Container, Navbar, Nav, NavbarBrand } from "react-bootstrap";
import logo from "../assets/images/Logo.svg";

const NavigationBar = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <NavbarBrand>
          <img src={logo} alt="logo" />
        </NavbarBrand>
        <Nav>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Support</Nav.Link>
          <Nav.Link>My Accoount</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
