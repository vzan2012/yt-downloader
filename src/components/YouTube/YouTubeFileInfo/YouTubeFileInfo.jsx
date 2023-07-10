import { Card, Image } from "react-bootstrap";

const YouTubeFileInfo = ({ fileId }) => {
  const ytFileId = fileId;
  return (
    <Card className="bg-light-subtle card-file-info">
      <Card.Header>File Information</Card.Header>
      <Card.Body>
        <p className="mb-2">
          <strong>Title: </strong>
          <span>lorem</span>
        </p>
        <p className="mb-2">
          <strong>Description: </strong>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quia.
          </span>
        </p>
        <p className="mb-2">
          <strong>Category: </strong>
          <span>lorem</span>
        </p>
        <p className="mb-2">
          <strong>Owner Channel: </strong>
          <span>lorem</span>
        </p>
        <p className="mb-2">
          <strong>Video Id: </strong>
          <span>{ytFileId}</span>
        </p>
        <p className="mb-2">
          <strong>Video Thumbnail: </strong>
          <br />
          <span>
            <Image src="https://placehold.co/168x94" thumbnail />
          </span>
        </p>
        <p className="mb-2">
          <strong>Author: </strong>
          <span>lorem</span>
        </p>
        <p className="mb-2">
          <strong>Author Thumbnail: </strong>
          <span>
            <Image src="https://placehold.co/48x48" thumbnail />
          </span>
        </p>
      </Card.Body>
    </Card>
  );
};

export default YouTubeFileInfo;
