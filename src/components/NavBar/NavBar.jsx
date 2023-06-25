import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-white">
              <span>BlueRay</span>
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/orders" className="text-white">
              Orders
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
