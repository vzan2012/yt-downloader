import "./App.scss";
import { Card, Col, Container, Row } from "react-bootstrap";

import Header from "./components/Layout/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row xs={12}>
          <Col xs={12} lg={{ span: 6, offset: 3 }}>
            <Card className="card-downloader">
              <Card.Header>Download YouTube Audio / Video</Card.Header>
              <Card.Body>This is a card body</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
