import "./App.scss";
import { Card, Col, Container, Row } from "react-bootstrap";

import Header from "./components/Layout/Header/Header";
import YouTubeDownloader from "./components/YouTubeDownloader/YouTubeDownloader";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row xs={12}>
          <Col xs={12} lg={{ span: 6, offset: 3 }}>
            <Card className="bg-light-subtle card-downloader">
              <Card.Header>Download YouTube Audio / Video</Card.Header>
              <Card.Body>
                <YouTubeDownloader />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
