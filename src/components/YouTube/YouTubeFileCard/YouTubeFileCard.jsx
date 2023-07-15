import { Image } from "react-bootstrap";
import YouTubeFileFormatForm from "../YouTubeFileFormatForm/YouTubeFileFormatForm";

const YouTubeFileCard = ({ fileDetails }) => {
  return (
    <>
      <p className="mb-2">
        <strong>Title: </strong>
        <span>{fileDetails.title}</span>
      </p>
      <p className="mb-2">
        <strong>Description: </strong>
        <span>{fileDetails.description}</span>
      </p>
      <p className="mb-2">
        <strong>Category: </strong>
        <span>{fileDetails.category}</span>
      </p>
      <p className="mb-2">
        <strong>Owner Channel: </strong>
        <span>{fileDetails.ownerChannelName}</span>
      </p>
      <p className="mb-2">
        <strong>Video Id: </strong>
        <span>{fileDetails.videoId}</span>
      </p>
      <p className="mb-2">
        <strong>Video Thumbnail: </strong>
        <br />
        <span>
          <Image
            src={fileDetails?.thumbnails[0]?.url}
            width="196"
            height="110"
            thumbnail
          />
        </span>
      </p>
      <p className="mb-2">
        <strong>Author: </strong>
        <span>{fileDetails.author?.name}</span>
      </p>
      <p className="mb-2">
        <strong>Author Thumbnail: </strong>
        <span>
          <Image src={fileDetails.author?.thumbnails[0]?.url} thumbnail />
        </span>
      </p>
      <p className="mb-2">
        <YouTubeFileFormatForm fileDetails={fileDetails} />
      </p>
    </>
  );
};

export default YouTubeFileCard;
