// import { YouTubeAudioV2 } from "node-tube-dl";
// import * as yt from "yt-converter";
// const yt = require("yt-converter");

const YouTubeConverter = (youtubeID) => {
  const youtubeURL = `https://youtube.com/watch?v=${youtubeID}`;

  console.log("Inside Yt-c");

  // console.log(yt);
  // yt.getInfo("https://www.youtube.com/watch?v=dQw4w9WgXcQ").then((info) => {
  //   console.log(info);
  // });

  // yt.convertAudio(
  //   {
  //     url: "https://www.youtube.com/watch?v=JzbGrvkqV5w",
  //     itag: 140,
  //     // directoryDownload: __dirname,
  //     title: "Your title here",
  //   },
  //   (data) => {
  //     console.log("inside");
  //     console.log(data);
  //   }
  // );
  // new YouTubeAudioV2(youtubeURL)
  //   .outputBuffer()
  //   .download()
  //   .then(() => {
  //     console.log("Audio File ID: " + youtubeID);
  //   });
};

export default YouTubeConverter;
