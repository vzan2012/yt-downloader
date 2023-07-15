import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

const fetchURL = "https://lazy-plum-underclothes.cyclic.app/youtube";

const YouTubeFileFormatForm = ({ fileDetails }) => {
  const ytFileFormat = useRef("");
  const ytFileQuality = useRef("");
  const [ytFileQualityList, setYtFileQualityList] = useState([]);

  const [ytDownloadStatus, setYtDownloadStatus] = useState(false);

  let ytFileQualityFieldStatus = !(ytFileQualityList.length === 0)
    ? true
    : false;

  // Fetch File Formats By Id
  const fetchFileFormatByGivenId = async (fileId, fileType) => {
    const response = await fetch(
      `${fetchURL}/get-file-formats-info?id=${fileId}&fileType=${fileType}`
    );

    const fileQualityList = await response.json();

    setYtFileQualityList(fileQualityList);
  };

  // On Change Handler - File Quality Field
  const onfileQualityHandler = () => {
    if (ytFileQuality.current.value !== "Select File Quality") {
      return setYtDownloadStatus(true);
    }

    setYtDownloadStatus(false);
  };

  // On Change Handler - File Format Field
  const onFileFormatHandler = () => {
    if (ytFileFormat.current.value !== "Select File Format") {
      return fetchFileFormatByGivenId(
        fileDetails.videoId,
        ytFileFormat.current.value
      );
    }
  };

  // Download YT File Handler - Fetch the POST request
  const downloadYTFile = async (fileFormat, fileQuality) => {
    try {
      const { container } = fileQuality;

      const response = await fetch(`${fetchURL}/download-file`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileId: fileDetails.videoId,
          type: fileFormat,
          ...fileQuality,
        }),
      });

      if (response.ok) {
        const dataBlob = await response.blob();
        const fileNameFormat = `${
          fileDetails.title.split(" ")[0]
        }.${container}`;

        const link = document.createElement("a");
        link.href = URL.createObjectURL(dataBlob);
        link.download = fileNameFormat;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error("E Error: " + response.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Download YT File Handler - Call Fetch the POST request function
  const onDownloadFileHandler = () => {
    const fileFormat = ytFileFormat.current.value;
    const fileQuality = ytFileQuality.current.value;
    return downloadYTFile(fileFormat, JSON.parse(fileQuality));
  };
  return (
    <>
      <Form.Select
        aria-label="Select File Format"
        id="yt-file-type"
        className="mt-3 mb-3"
        onChange={onFileFormatHandler}
        ref={ytFileFormat}
      >
        <option>Select File Format</option>
        <option value="audio">Audio</option>
        <option value="video">Video</option>
        <option value="videoandaudio">Video & Audio</option>
      </Form.Select>
      <Form.Select
        aria-label="Select File Quality"
        id="yt-file-format"
        className="mt-3 mb-3"
        disabled={!ytFileQualityFieldStatus}
        onChange={onfileQualityHandler}
        ref={ytFileQuality}
      >
        <option>Select File Quality</option>
        {ytFileQualityList.map((fileQualityItem) => {
          const { quality, container, qualityLabel, itag } = fileQualityItem;
          return (
            <option
              key={itag}
              id={itag}
              value={JSON.stringify(fileQualityItem)}
            >
              {quality} | {container} | {qualityLabel ? qualityLabel : "-"} |{" "}
              {itag}
            </option>
          );
        })}
      </Form.Select>

      <Button
        variant="primary"
        className="text-center"
        style={{ margin: "0 auto", display: "block" }}
        onClick={onDownloadFileHandler}
        disabled={!ytDownloadStatus}
      >
        Download File
      </Button>
    </>
  );
};

export default YouTubeFileFormatForm;
