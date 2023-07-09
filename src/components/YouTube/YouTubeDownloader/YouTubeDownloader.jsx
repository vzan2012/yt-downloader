import { useState } from "react";
import "./YouTubeDownloader.scss";
import { Button, Form } from "react-bootstrap";
import YouTubeConverter from "../YouTubeConverter/YouTubeConverter";

const YouTubeDownloader = () => {
  const [youtubeID, setYouTubeID] = useState("");
  const [fileType, setFileType] = useState("audio");
  const formStatus = fileType !== null && youtubeID.length > 4;

  // Reset Form
  const resetForm = () => {
    setYouTubeID("");
  };

  // Change YouTube ID Field
  const onChangeYouTubeID = (e) => {
    setYouTubeID(e.target.value);
  };

  // Change File Type - Radio Button - States
  const onOptionChange = (e) => {
    setFileType(e.target.value);
  };

  // Submit Handler
  const submitFormHandler = (e) => {
    e.preventDefault();

    if (youtubeID && fileType) {
      console.log(youtubeID);
      console.log(fileType);

      // YouTubeConverter(youtubeID);
    }

    resetForm();
  };

  return (
    <Form className="youtube-download-form" onSubmit={submitFormHandler}>
      <Form.Group className="mb-3" controlId="controlYouTubeID">
        <Form.Label>Enter Youtube Video/Audio ID:</Form.Label>
        <Form.Control
          type="text"
          placeholder="YouTube ID - file to download"
          onChange={onChangeYouTubeID}
          value={youtubeID}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlYouTubeType">
        <Form.Label>Select file type: </Form.Label>
        <Form.Check
          inline
          name="fileType"
          label="Audio"
          value="audio"
          type="radio"
          id="audioFileType"
          className="ms-3"
          onChange={onOptionChange}
          checked={fileType === "audio"}
        />
        <Form.Check
          inline
          name="fileType"
          label="Video"
          value="video"
          type="radio"
          id="videoFileType"
          onChange={onOptionChange}
          checked={fileType === "video"}
        />
      </Form.Group>
      <Form.Group className="text-center">
        <Button variant="primary" type="submit" disabled={!formStatus}>
          Download File
        </Button>
      </Form.Group>
    </Form>
  );
};

export default YouTubeDownloader;
