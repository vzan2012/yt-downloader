import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import YouTubeFileCard from "../YouTubeFileCard/YouTubeFileCard";

const fetchURL = "https://lazy-plum-underclothes.cyclic.app/youtube";

const fetchFileInfoFromYTSite = async (fileId) => {
  const response = await fetch(`${fetchURL}/get-file-info?id=${fileId}`);

  return response.json();
};

export const fetchFileInformation = (fileId) => {
  return fetchFileInfoFromYTSite(fileId);
};

const YouTubeFileInfo = ({ fileId }) => {
  const [fileDetailsObject, setFileDetailsObject] = useState({});

  useEffect(() => {
    fetchFileInformation(fileId).then(
      ({
        title,
        description,
        category,
        ownerChannelName,
        videoId,
        author,
        thumbnails,
      }) => {
        setFileDetailsObject((prevState) => ({
          ...prevState,
          title,
          description,
          category,
          ownerChannelName,
          videoId,
          author,
          thumbnails,
        }));
      }
    );

    return () => {};
  }, []);

  return (
    <Card className="bg-light-subtle card-file-info">
      <Card.Header>File Information</Card.Header>
      <Card.Body>
        {Object.keys(fileDetailsObject).length === 0 ? (
          <div className="d-md-block text-center">
            <Spinner
              animation="border"
              variant="primary"
              style={{ margin: "0 auto" }}
            />
          </div>
        ) : (
          <YouTubeFileCard fileDetails={fileDetailsObject} />
        )}
      </Card.Body>
    </Card>
  );
};

export default YouTubeFileInfo;
