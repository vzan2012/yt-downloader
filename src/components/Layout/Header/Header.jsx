import "./Header.scss";

import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="logo-text">
          Youtube Downloader
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
