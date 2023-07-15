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

  const fetchFileFormatByGivenId = async (fileId, fileType) => {
    const response = await fetch(
      `${fetchURL}/get-file-formats-info?id=${fileId}&fileType=${fileType}`
    );

    const fileQualityList = await response.json();

    setYtFileQualityList(fileQualityList);
  };

  const onfileQualityHandler = () => {
    if (ytFileQuality.current.value !== "Select File Quality") {
      return setYtDownloadStatus(true);
    }

    setYtDownloadStatus(false);
  };

  const onFileTypeHandler = () => {
    if (ytFileFormat.current.value !== "Select File Format") {
      return fetchFileFormatByGivenId(
        fileDetails.videoId,
        ytFileFormat.current.value
      );
    }
  };

  const downloadYTFile = async (fileFormat, fileQuality) => {
    const { quality, container, qualityLabel, itag } = fileQuality;
    console.log(JSON.stringify(fileQuality));
    console.log(
      JSON.stringify({
        fileId: fileDetails.videoId,
        type: fileFormat,
        quality,
        container,
        qualityLabel,
        itag,
      })
    );
    const response = await fetch(`${fetchURL}/download-file`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fileId: fileDetails.videoId,
        type: fileFormat,
        quality,
        container,
        qualityLabel,
        itag,
      }),
    });

    const data = await response.json();
    console.log(data);
    return data;
  };

  const onDownloadFileHandler = async () => {
    const fileFormat = ytFileFormat.current.value;
    const fileQuality = ytFileQuality.current.value;

    console.log(fileQuality);
    console.log(JSON.parse(...fileQuality));
    // return await downloadYTFile(fileFormat, fileQuality);
  };
  return (
    <>
      <Form.Select
        aria-label="Select File Format"
        id="yt-file-type"
        className="mt-3 mb-3"
        onChange={onFileTypeHandler}
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
        {ytFileQualityList.map(({ quality, container, qualityLabel, itag }) => (
          <option
            key={itag}
            id={itag}
            value={{ quality, container, qualityLabel, itag }}
          >
            {quality} | {container} | {qualityLabel ? qualityLabel : "-"} |{" "}
            {itag}
          </option>
        ))}
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
