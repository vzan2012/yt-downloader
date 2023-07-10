import "./App.scss";

import Header from "./components/Layout/Header/Header";
import YouTubeDownloader from "./components/YouTube/YouTubeDownloader/YouTubeDownloader";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row xs={12}>
          <Col xs={12} lg={{ span: 6, offset: 3 }}>
            <YouTubeDownloader />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
