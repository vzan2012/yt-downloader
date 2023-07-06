import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="navbar-brands">
          Youtube Downloader
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
