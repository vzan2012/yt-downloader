import { useState } from "react";
import "./YouTubeDownloader.scss";
import { Card, Button, Form } from "react-bootstrap";
import YouTubeFileInfo, {
  fetchFileInformation,
} from "../YouTubeFileInfo/YouTubeFileInfo";

const YouTubeDownloader = () => {
  const [youtubeID, setYouTubeID] = useState("");
  const [displayFileInfoCardStatus, setDisplayFileInfoCardStatus] =
    useState(false);
  const formStatus = youtubeID.length > 4;
  const [fileIdFieldReadStatus, setFileIdFieldReadStatus] = useState(false);

  // Reset Form
  const resetForm = () => {
    setFileIdFieldReadStatus(false);
    setYouTubeID("");
    setDisplayFileInfoCardStatus(false);
  };

  // Change YouTube ID Field
  const onChangeYouTubeID = (e) => {
    setYouTubeID(e.target.value);
  };

  // Submit Handler
  const submitFormHandler = (e) => {
    e.preventDefault();
    setYouTubeID(youtubeID);
    setDisplayFileInfoCardStatus(true);
    setFileIdFieldReadStatus(true);

    fetchFileInformation(youtubeID);
  };

  // Clear Button Handler
  const onClearHandler = () => {
    resetForm();
  };

  return (
    <>
      <Card className="bg-light-subtle card-downloader">
        <Card.Header>Download YouTube Audio / Video</Card.Header>
        <Card.Body>
          <Form className="youtube-download-form" onSubmit={submitFormHandler}>
            <Form.Group className="mb-3" controlId="controlYouTubeID">
              <Form.Label>Enter Youtube Video/Audio ID:</Form.Label>
              <Form.Control
                type="text"
                placeholder="YouTube ID - file to download"
                onChange={onChangeYouTubeID}
                value={youtubeID}
                maxLength={20}
                readOnly={fileIdFieldReadStatus}
              />
            </Form.Group>
            <Form.Group className="text-center">
              <Button variant="primary" type="submit" disabled={!formStatus}>
                Get Info
              </Button>
              <Button
                variant="danger"
                type="button"
                className="btnClear"
                disabled={!formStatus}
                onClick={onClearHandler}
              >
                Clear
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>

      {/* Show the Youtube File Info Card */}
      {displayFileInfoCardStatus && <YouTubeFileInfo fileId={youtubeID} />}
    </>
  );
};

export default YouTubeDownloader;
